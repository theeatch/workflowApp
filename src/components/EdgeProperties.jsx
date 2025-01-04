import React, { useState } from "react";

const EdgeProperties = ({ selectedEdge, onUpdateEdge, onDeleteEdge }) => {
  const [label, setLabel] = useState(selectedEdge?.label || "");

  const handleSave = () => {
    if (selectedEdge) {
      onUpdateEdge(selectedEdge.id, label);
    }
  };


  return (
    <div className="p-4 bg-white border border-gray-300 shadow-md rounded">
      <h3 className="text-lg font-semibold mb-2">Edit Edge</h3>
      <label className="block text-sm font-medium text-gray-700">Edge Label</label>
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        className="w-full p-2 mt-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
      />
      <button
        onClick={handleSave}
        className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Save
      </button>
      <button
        onClick={onDeleteEdge}
        className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-green-700"
      >
        Delete
      </button>
    </div>
  );
};

export default EdgeProperties;
