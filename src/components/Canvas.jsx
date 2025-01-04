import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "./Sidebar";
import NodeProperties from "./NodeProperties";
import EdgeProperties from "./EdgeProperties";

const Canvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [disconnectedNodes, setDisconnectedNodes] = useState([]);

  
  const addNode = (type) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type: "default",
      data: { label: type },
      position: { x: Math.random() * 400 + 50, y: Math.random() * 300 + 50 },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  
  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setSelectedNodeId(node.id);
    setSelectedEdge(null); 
  }, []);

  
  const onEdgeClick = useCallback((event, edge) => {
    event.preventDefault();
    setSelectedEdge(edge);
    setSelectedNode(null);
    setSelectedNodeId(null);
  }, []);

  
  const updateNodeData = (id, newData) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...newData } } : node
      )
    );
    setSelectedNode(null);
    setSelectedNodeId(null);
  };

 
  const updateEdgeLabel = (id, newLabel) => {
    setEdges((prevEdges) =>
      prevEdges.map((edge) =>
        edge.id === id ? { ...edge, label: newLabel } : edge
      )
    );
    setSelectedEdge(null);
  };

  
  const deleteNode = () => {
    if (selectedNode) {
      setNodes((prevNodes) => prevNodes.filter((node) => node.id !== selectedNode.id));
      setEdges((prevEdges) =>
        prevEdges.filter((edge) => edge.source !== selectedNode.id && edge.target !== selectedNode.id)
      );
      setSelectedNode(null);
      setSelectedNodeId(null);
    }
  };

  
  const onConnect = useCallback((params) => {
    const newEdge = { ...params, id: `e${params.source}-${params.target}`, label: "New Edge" };
    setEdges((eds) => addEdge(newEdge, eds));
  }, [setEdges]);

  
  const validateWorkflow = () => {
    const connectedNodeIds = new Set();
    edges.forEach((edge) => {
      connectedNodeIds.add(edge.source);
      connectedNodeIds.add(edge.target);
    });

    const disconnected = nodes.filter((node) => !connectedNodeIds.has(node.id));
    setDisconnectedNodes(disconnected.map((node) => node.id));

    if (disconnected.length > 0) {
      alert("Warning: Some nodes are disconnected! They are highlighted in red.");
    } else {
      alert("Workflow is valid. No disconnected nodes.");
    }
  };


  const saveWorkflow = () => {
    localStorage.setItem("workflow", JSON.stringify({ nodes, edges }));
    alert("Workflow saved!");
  };

  
  useEffect(() => {
    const savedWorkflow = JSON.parse(localStorage.getItem("workflow"));
    if (savedWorkflow) {
      setNodes(savedWorkflow.nodes);
      setEdges(savedWorkflow.edges);
    }
  }, [setEdges, setNodes]); 

  return (
    <ReactFlowProvider>
      <div className="flex h-screen bg-gray-200">
        {/* Sidebar */}
        <Sidebar addNode={addNode} />

        {/* Main Workflow Canvas */}
        <div className="flex-1 border-l border-gray-300 bg-gray-100 relative">
          <ReactFlow
            nodes={nodes.map((node) => ({
              ...node,
              style: {
                border: selectedNodeId === node.id ? "3px solid blue" : "",
                backgroundColor: disconnectedNodes.includes(node.id) ? "#ffcccc" : "",
              },
            }))}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onEdgeClick={onEdgeClick} 
            fitView
          >
            <Controls />
            <MiniMap />
            <Background color="#ddd" gap={16} />
          </ReactFlow>
        </div>

        {/* Properties Sidebar */}
        <div className="w-1/4 bg-white p-4 shadow-md">
          {selectedNode ? (
            <NodeProperties
              selectedNode={selectedNode}
              onUpdateNode={updateNodeData}
              onDeleteNode={deleteNode}
            />
          ) : selectedEdge ? (
            <EdgeProperties
              selectedEdge={selectedEdge}
              onUpdateEdge={updateEdgeLabel}
            />
          ) : (
            <p className="text-gray-500">Select a node or edge</p>
          )}
          <button
            className="w-full mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
            onClick={validateWorkflow}
          >
            Validate Workflow
          </button>
          <button
            className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={saveWorkflow}
          >
            Save Workflow
          </button>
        </div>
      </div>
    </ReactFlowProvider>
  );
};

export default Canvas;
