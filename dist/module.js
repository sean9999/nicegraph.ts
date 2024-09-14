import $lOw4z$graphology from "graphology";
import {uuidv7 as $lOw4z$uuidv7} from "uuidv7";



class $efdf4333b861d371$var$NiceEntity {
    graph;
    id;
    attrs;
    constructor(g, id, attrs){
        this.graph = g;
        if (id) this.id = id;
        else this.id = (0, $lOw4z$uuidv7)();
        if (attrs) this.attrs = new Map(Object.entries(attrs));
    }
}
class $efdf4333b861d371$export$afe5a08918e59141 extends $efdf4333b861d371$var$NiceEntity {
    from;
    to;
    nature;
    constructor(g, from, to, nature, attrs){
        super(g, [
            from.id,
            to.id
        ].join(","), attrs);
        this.from = from;
        this.to = to;
        if (nature) this.nature = nature;
    }
}
class $efdf4333b861d371$export$25e5ac9c0e9bbbf extends $efdf4333b861d371$var$NiceEntity {
    constructor(g, id, attrs){
        super(g, id, attrs);
    }
    OutEdges() {
        return this.graph.entities.OutEdges.get(this);
    }
    InEdges() {
        return this.graph.entities.InEdges.get(this);
    }
    async Traverse(fn) {
        await fn(this);
        const promises = [];
        this.OutEdges().forEach((e)=>{
            promises.push(fn(e.to));
        });
        return Promise.all(promises);
    }
}
class $efdf4333b861d371$export$85b2132b8340b9e3 {
    ology;
    entities;
    constructor(){
        this.ology = new (0, $lOw4z$graphology)();
        this.entities = {
            Nodes: new Map(),
            Edges: new Map(),
            OutEdges: new Map(),
            InEdges: new Map()
        };
    }
    getNode(id) {
        return this.entities.Nodes.get(id);
    }
    addNode(id, attrs) {
        const n = new $efdf4333b861d371$export$25e5ac9c0e9bbbf(this, id, attrs);
        this.ology.addNode(id, attrs);
        this.entities.Nodes.set(id, n);
        return n;
    }
    updateNode(id, attrs) {
        const n = this.getNode(id);
        let mergeResult = this.ology.mergeNode(id, attrs);
        console.info({
            id: id,
            mergeResult: mergeResult
        });
        n.attrs = attrs;
    }
    deleteNode(id) {
        this.ology.dropNode(id);
        const n = this.getNode(id);
        this.entities.Nodes.delete(id);
        this.entities.InEdges.delete(n);
        this.entities.OutEdges.delete(n);
    }
    getEdge(id) {
        return this.entities.Edges.get(id);
    }
    addEdge(id, attrs) {
        const [fromId, toId] = id.split(",");
        const from = this.getNode(fromId);
        const to = this.getNode(toId);
        const e = new $efdf4333b861d371$export$afe5a08918e59141(this, from, to, "friend", attrs);
        this.entities.Edges.set(id, e);
        this.entities.OutEdges.get(from).add(e);
        this.entities.InEdges.get(to).add(e);
    }
    updateEdge(id, attrs) {
        const e = this.getEdge(id);
        e.attrs = attrs;
        this.ology.mergeEdgeAttributes(id, attrs);
    }
    deleteEdge(id) {
        const e = this.getEdge(id);
        this.entities.Edges.delete(id);
        this.entities.OutEdges.get(e.from).delete(e);
        this.entities.InEdges.get(e.to).delete(e);
        this.ology.dropEdge(id);
    }
}


export {$efdf4333b861d371$export$afe5a08918e59141 as NiceEdge, $efdf4333b861d371$export$25e5ac9c0e9bbbf as NiceNode, $efdf4333b861d371$export$85b2132b8340b9e3 as NiceGraph};
//# sourceMappingURL=module.js.map
