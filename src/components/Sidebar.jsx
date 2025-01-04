import React from "react";

const Sidebar = ({ addNode }) => {
  const nodeTypes = ["input", "default", "output"];

  return (
    <div className="w-1/4 h-full p-4 bg-gray-100 border-r border-gray-300 shadow-md">
      <h3 className="text-lg font-semibold mb-3">Node Palette</h3>
      {nodeTypes.map((type) => (
        <button
          key={type}
          onClick={() => addNode(type)}
          className="w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add {type}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
