import React, { useState, useEffect } from "react";

const NodeProperties = ({ selectedNode, onUpdateNode, onDeleteNode }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (selectedNode) {
      setName(selectedNode.data.label);
    }
  }, [selectedNode]);

  const handleSave = () => {
    if (selectedNode) {
      onUpdateNode(selectedNode.id, { label: name });
    }
  };

  if (!selectedNode) return <div className="text-gray-500">No node selected</div>;

  return (
    <div className="p-4 bg-white border border-gray-300 shadow-md rounded">
      <h3 className="text-lg font-semibold mb-2">Edit Node</h3>
      <label className="block text-sm font-medium text-gray-700">Node Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mt-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
      />
      <button
        onClick={handleSave}
        className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Save
      </button>
      <button
        onClick={onDeleteNode}
        className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Delete Node
      </button>
    </div>
  );
};

export default NodeProperties;
