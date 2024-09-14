import { NiceEdge, NiceGraph, NiceNode } from "../src/graph";

test("basic crud", () => {
    const g = new NiceGraph();
    const foo = g.addNode(new NiceNode("foo",{}));
    const foo2 = g.getNode("foo");
    if (foo2) {
        expect(foo.id).toEqual(foo2.id);
    }

    //  number of nodes = 1
    expect(g.Order()).toEqual(1);
    expect(g.ology.order).toEqual(1);

    //  number of edges = 0
    expect(g.Size()).toEqual(0);
    expect(g.ology.size).toEqual(0);

    const bar = new NiceNode("bar", {"bar": true});
    g.addNode(bar);
    const bar2 = g.getNode("bar");

    if (bar2) {
        expect(bar.attrs.bar).toBeTruthy();
        expect(bar.attrs.bar).toEqual(bar2.attrs.bar);
    }

    //  number of nodes = 2
    expect(g.Order()).toEqual(2);
    expect(g.ology.order).toEqual(2);

    //  number of edges = 0
    expect(g.Size()).toEqual(0);
    expect(g.ology.size).toEqual(0);

    const e1 = new NiceEdge(foo, bar, {});
    g.addEdge(e1);

    //  number of edges = 1
    expect(g.Size()).toEqual(1);
    expect(g.ology.size).toEqual(1);

    //  now delete one of the nodes
    g.deleteNode(foo.id);


    //  number of nodes = 1
    expect(g.Order()).toEqual(1);
    expect(g.ology.order).toEqual(1);

    //  number of edges = 0
    expect(g.getEdge(e1.from, e1.to)).toBeNull();
    expect(g.ology.size).toEqual(0);

    const batman = g.createNode("batman", {top: true, bottom: false});
    const robin = g.createNode("robin", {top: false, bottom: true});

    // number of nodes = 3
    expect(g.Order()).toEqual(3);
    expect(g.ology.order).toEqual(3);

    const e = g.createEdge(batman, robin);

    //  number of edges = 1
    expect(g.ology.size).toEqual(1);
    expect(g.Size()).toEqual(1);

    const john = g.createNode("john", {lastname: "lennon"});
    const paul = g.createNode("paul", {lastname: "McCartney"});
    const ringo = g.createNode("ringo", {lastname: "Starr"});
    const george = g.createNode("george", {lastname: "Harrison"});

    // number of nodes = 7
    expect(g.Order()).toEqual(7);
    expect(g.ology.order).toEqual(7);

    g.createEdge(john, paul);
    g.createEdge(paul, ringo);
    g.createEdge(ringo, george);

    //  number of edges = 4
    expect(g.ology.size).toEqual(4);
    expect(g.Size()).toEqual(4);

    //  what if we tried to add john again?
    const adding_a_node_that_already_exists = () => {
        g.createNode("john", {lastname: "THE RIPPEr"});
    };

    expect(adding_a_node_that_already_exists).toThrow();

    // number of nodes = still 7
    expect(g.Order()).toEqual(7);
    expect(g.ology.order).toEqual(7);

    //  number of edges = still 4
    expect(g.ology.size).toEqual(4);
    expect(g.Size()).toEqual(4);

    //  still lennon
    const john_again_again = g.getNode("john");
    expect(john_again_again.attrs.lastname).toEqual("lennon");

});


// test("traversal", async () => {
//     const g = new NiceGraph();
//     const john = g.createNode("john", {lastname: "lennon"});
//     const paul = g.createNode("paul", {lastname: "McCartney"});
//     const ringo = g.createNode("ringo", {lastname: "Starr"});
//     const george = g.createNode("george", {lastname: "Harrison"});
//     const yasir = g.createNode("yasir", {lastname: "arafat"});
 
//     g.createEdge(john, paul);
//     g.createEdge(paul, ringo);
//     g.createEdge(ringo, george);

//     // number of nodes = 5
//     expect(g.Order()).toEqual(5);
//     expect(g.ology.order).toEqual(5);

//     //  number of edges = still 3
//     expect(g.ology.size).toEqual(3);
//     expect(g.Size()).toEqual(3);

//     expect(john.attrs.band).toBeUndefined();
//     expect(yasir.attrs.band).toBeUndefined();

//     await john.Traverse(me => {
//         return new Promise(resolve => {
//             me.attrs.band = "the beatles";
//             resolve(true);
//         });
//     });

//     expect(john.attrs.band).toEqual("the beatles");
//     expect(paul.attrs.band).toEqual("the beatles");
//     expect(ringo.attrs.band).toEqual("the beatles");
//     expect(yasir.attrs.band).toBeUndefined();


// });