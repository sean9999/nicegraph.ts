import Graph from "graphology";
type NodeId = string;
type EdgeId = string;
interface AttributeMap {
    [index: string]: any;
}
declare class NiceEntity {
    graph: NiceGraph;
    id: string;
    attrs: AttributeMap;
    constructor(g: NiceGraph, id: string, attrs: AttributeMap);
}
export class NiceEdge extends NiceEntity {
    from: NiceNode;
    to: NiceNode;
    nature?: string;
    constructor(g: NiceGraph, from: NiceNode, to: NiceNode, nature: string, attrs: AttributeMap);
}
type NodeTraverser = (n: NiceNode) => Promise<any>;
export class NiceNode extends NiceEntity {
    constructor(g: NiceGraph, id: string, attrs: AttributeMap);
    OutEdges(): Set<NiceEdge>;
    InEdges(): Set<NiceEdge>;
    Traverse(fn: NodeTraverser): Promise<any[]>;
}
interface GraphDatabase {
    Nodes: Map<NodeId, NiceNode>;
    Edges: Map<EdgeId, NiceEdge>;
    OutEdges: Map<NiceNode, Set<NiceEdge>>;
    InEdges: Map<NiceNode, Set<NiceEdge>>;
}
export class NiceGraph {
    ology: Graph;
    entities: GraphDatabase;
    constructor();
    getNode(id: NodeId): NiceNode | null;
    addNode(id: NodeId, attrs: AttributeMap): NiceNode;
    updateNode(id: NodeId, attrs: AttributeMap): void;
    deleteNode(id: NodeId): void;
    getEdge(id: EdgeId): NiceEdge | null;
    addEdge(id: EdgeId, attrs: AttributeMap): void;
    updateEdge(id: string, attrs: AttributeMap): void;
    deleteEdge(id: string): void;
}

//# sourceMappingURL=types.d.ts.map
