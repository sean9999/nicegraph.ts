import { EdgeCurvedArrowProgram } from "@sigma/edge-curve";
import Graph from "graphology";
import ForceSupervisor from "graphology-layout-force/worker";
import Sigma from "sigma";

const goSigma = () => {

    const container = document.getElementById('sigma-container');

	const graph = new Graph();

    const RED = "#FA4F40";
    const BLUE = "#727EE0";
    const GREEN = "#5DB346";
  
    graph.addNode("John", { size: 15, label: "John", color: RED });
    graph.addNode("Mary", { size: 15, label: "Mary", color: RED });
    graph.addNode("Suzan", { size: 15, label: "Suzan", color: RED });
    graph.addNode("Nantes", { size: 15, label: "Nantes", color: BLUE });
    graph.addNode("New-York", { size: 15, label: "New-York",image: "./city.svg", color: BLUE });
    graph.addNode("Sushis", { size: 7, label: "Sushis",  color: GREEN });
    graph.addNode("Falafels", { size: 7, label: "Falafels", color: GREEN });
    graph.addNode("Kouign Amann", { size: 7, label: "Kouign Amann",  color: GREEN });
  
    graph.addEdge("John", "Mary", { type: "line", label: "works with", size: 5 });
    graph.addEdge("Mary", "Suzan", { type: "line", label: "works with", size: 5 });
    graph.addEdge("Mary", "Nantes", { type: "arrow", label: "lives in", size: 5 });
    graph.addEdge("John", "New-York", { type: "arrow", label: "lives in", size: 5 });
    graph.addEdge("Suzan", "New-York", { type: "arrow", label: "lives in", size: 5 });
    graph.addEdge("John", "Falafels", { type: "arrow", label: "eats", size: 5 });
    graph.addEdge("Mary", "Sushis", { type: "arrow", label: "eats", size: 5 });
    graph.addEdge("Suzan", "Kouign Amann", { type: "arrow", label: "eats", size: 5 });


  graph.nodes().forEach((node, i) => {
    const angle = (i * 2 * Math.PI) / graph.order;
    graph.setNodeAttribute(node, "x", 100 * Math.cos(angle));
    graph.setNodeAttribute(node, "y", 100 * Math.sin(angle));
  });


	// Create the sigma
	const renderer = new Sigma(graph, container,{
		defaultEdgeType: "curve",
		labelSize: 15,
		edgeProgramClasses: {
			curve: EdgeCurvedArrowProgram,
		},
	});

	const layout = new ForceSupervisor(graph, { isNodeFixed: (_, attr) => attr.highlighted });
	layout.start();


};

export { goSigma };
