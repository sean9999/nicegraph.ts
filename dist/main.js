var $9ac3v$graphology = require("graphology");
var $9ac3v$uuidv7 = require("uuidv7");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "NiceEdge", () => $e756794fa3fb6bd2$export$afe5a08918e59141);
$parcel$export(module.exports, "NiceNode", () => $e756794fa3fb6bd2$export$25e5ac9c0e9bbbf);
$parcel$export(module.exports, "NiceGraph", () => $e756794fa3fb6bd2$export$85b2132b8340b9e3);


class $e756794fa3fb6bd2$var$NiceEntity {
    graph;
    id;
    attrs;
    constructor(g, id, attrs){
        this.graph = g;
        if (id) this.id = id;
        else this.id = (0, $9ac3v$uuidv7.uuidv7)();
        if (attrs) this.attrs = new Map(Object.entries(attrs));
    }
}
class $e756794fa3fb6bd2$export$afe5a08918e59141 extends $e756794fa3fb6bd2$var$NiceEntity {
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
class $e756794fa3fb6bd2$export$25e5ac9c0e9bbbf extends $e756794fa3fb6bd2$var$NiceEntity {
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
class $e756794fa3fb6bd2$export$85b2132b8340b9e3 {
    ology;
    entities;
    constructor(){
        this.ology = new (0, ($parcel$interopDefault($9ac3v$graphology)))();
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
        const n = new $e756794fa3fb6bd2$export$25e5ac9c0e9bbbf(this, id, attrs);
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
        const e = new $e756794fa3fb6bd2$export$afe5a08918e59141(this, from, to, "friend", attrs);
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


//# sourceMappingURL=main.js.map
