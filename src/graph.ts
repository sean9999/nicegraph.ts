import Graph from "graphology";
import { uuidv7 } from "uuidv7";

type NodeId = string;

export interface AttributeMap{
    [index : string]: any;
}

export type AttributeUpdater = (attr : AttributeMap) => AttributeMap;
export type NodeTraverser = (n : NiceNode) => Promise<AttributeUpdater>;

class NiceEntity{
    graph : NiceGraph;
    id : string;
    attrs : AttributeMap;
    constructor(id : string = "", attrs : AttributeMap = {}) {
        if (id) {
            this.id = id;
        } else {
            this.id = uuidv7();
        }
        this.attrs = attrs;
    }
}

class NiceEdge extends NiceEntity {
    from : NiceNode;
    to : NiceNode;
    constructor(from : NiceNode, to : NiceNode, attrs : AttributeMap = {}) {
        super([from.id, to.id].join(","), attrs);
        this.from = from;
        this.to = to;
        this.graph = from.graph;
    }
}

class NiceNode extends NiceEntity{
    constructor(id : string = "", attrs : AttributeMap = {}) {
        super(id, attrs);
    }
    OutEdges() : Set<NiceEdge> {
        return this.graph.entities.OutEdges.get(this);
    }
    InEdges() : Set<NiceEdge> {
        return this.graph.entities.InEdges.get(this);
    }
    Followees() : NiceNode[] {
        return Array.from(this.OutEdges()).map(e => e.to);
    }
    Followers() : NiceNode[] {
        return Array.from(this.InEdges()).map(e => e.from);
    }
    // async Traverse(fn : NodeTraverser) {
    //     await fn(this);
    //     const promises : Promise<any>[] = [];
    //     this.OutEdges().forEach(e => {
    //         promises.push(fn(e.to));
    //     });
    //     return Promise.all(promises);
    // }
}

interface GraphDatabase{
    Nodes: Map<NodeId, NiceNode>
    OutEdges: Map<NiceNode, Set<NiceEdge>>
    InEdges: Map<NiceNode, Set<NiceEdge>>
}

class NiceGraph{
    ology : Graph;
    entities: GraphDatabase;
    constructor(){
        this.ology = new Graph();
        this.entities = {
            Nodes: new Map(),
            OutEdges: new Map(),
            InEdges: new Map()
        };
    }
    async traverse(n : NiceNode, fn1 : NodeTraverser) : Promise<any> {
        return fn1(n).then((fn2) => {
            this.ology.updateNode(n.id, fn2);
            return Promise.all(n.Followees().map(m => this.traverse(m, fn1)));
        });
    }
    getNode(id: NodeId) : NiceNode {
        return this.entities.Nodes.get(id);
    }
    createNode(id : string = "", attrs : AttributeMap = {}) : NiceNode {
        const n = new NiceNode(id, attrs);
        return this.addNode(n);
    }
    addNode(n: NiceNode) : NiceNode {
        n.graph = this;
        this.ology.addNode(n.id, n.attrs);
        this.entities.Nodes.set(n.id, n);
        this.entities.InEdges.set(n, new Set());
        this.entities.OutEdges.set(n, new Set());
        return n
    }
    updateNode(id: NodeId, fn : AttributeUpdater) : NiceNode {
        const n = this.getNode(id);
        const newAttrs = fn(n.attrs);
        n.attrs = newAttrs;
        this.ology.updateNode(id, fn);
        return n;
    }
    deleteNode(id: NodeId) {
        this.ology.dropNode(id);
        const n = this.getNode(id);
        this.entities.Nodes.delete(id);
        this.entities.InEdges.delete(n);
        this.entities.OutEdges.delete(n);
    }
    getEdge(from : NiceNode, to : NiceNode) : NiceEdge | null {
        let e = null;
        const es = this.entities.OutEdges.get(from);
        if (es) {
            es.forEach(edge => {
                if (edge.to === to) {
                    e = edge;
                }
            });
        }
        return e;
    }
    addEdge(e: NiceEdge) : NiceEdge {
        e.graph = this;
        this.entities.OutEdges.get(e.from).add(e);
        this.entities.InEdges.get(e.to).add(e);
        this.ology.addEdge(e.from.id, e.to.id, e.attrs);
        return e;
    }
    createEdge(n1 : NiceNode, n2 : NiceNode) : NiceEdge {
        const e = new NiceEdge(n1, n2, {});
        return this.addEdge(e);
    }
    updateEdge(e : NiceEdge, fn : AttributeUpdater) {
        const newAttrs = fn(e.attrs);
        e.attrs = newAttrs;
        this.ology.updateEdge(e.id, newAttrs);
    }
    deleteEdge(e : NiceEdge) {
        this.entities.OutEdges.get(e.from).delete(e);
        this.entities.InEdges.get(e.to).delete(e);
        this.ology.dropEdge(e.id);
    }
    Size() : number {
        //  number of edges
        let count : number = 0;
        this.entities.OutEdges.forEach(m => {
            count += m.size;
        });
        return count;
    }
    Order() : number {
        return this.entities.Nodes.size;
    }
}

export { NiceEdge, NiceGraph, NiceNode };

