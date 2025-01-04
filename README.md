# 🚀 Workflow Dashboard

Workflow Dashboard is a **React-based application** that enables users to **create interactive workflows using a drag-and-drop interface** and visualize workflow data with **dynamic charts**.

---

## 📌 Features Implemented

### 1️⃣ Drag-and-Drop Workflow Builder
- ✅ **Canvas** – A **resizable, zoomable workspace** for workflow building.
- ✅ **Draggable Nodes** – Supports **Task, Decision, Start, and End nodes**.
- ✅ **Connections** – Users can connect nodes with lines (simulating directed edges).
- ✅ **Node Properties Panel** – Allows editing **name, execution time, and type** of nodes.
- ✅ **Validation** – Highlights **disconnected nodes** and prevents multiple **Start nodes**.
- ✅ **Save & Load Workflows** – Saves workflow in **local storage** and reloads on refresh.

---

### 2️⃣ Interactive Edge Features
- ✅ **Click-to-Edit Edge Labels** – Users can **click edges** and rename them.
- ✅ **Delete Edges from Sidebar** – Edge properties panel includes a **"Delete Edge"** button.

---

### 3️⃣ Workflow Validation & Error Handling
- ✅ **Disconnected Node Detection** – Highlights nodes **without connections** in **red**.
- ✅ **Validation Alert** – Alerts users if a **workflow is invalid**.
- ✅ **Edge Connection Rules** – Ensures proper flow between different **node types**.

---

### 4️⃣ Export & Import Workflows
- ✅ **Export Workflow as JSON** – Users can **download** the current workflow.
- ✅ **Preserve Workflow Data** – Workflows **retain node positions, labels, and edges**.

---

## 📌 Features to be Added Soon 🚀

### 1️⃣ Interactive Analytics Panel
- 🔜 **Bar Chart** – Visualizes **execution time for each node**.
- 🔜 **Line Chart** – Displays **cumulative execution time across connected nodes**.
- 🔜 **Pie Chart** – Represents the **distribution of execution times by node type**.
- 🔜 **Dynamic Interactions** – Hovering over a chart will **highlight the corresponding nodes** in the workflow.

---

### 2️⃣ Enhanced Workflow Features
- 🔜 **Simulate Execution** – Animate the workflow to show the **processing sequence**.
- 🔜 **Grid Snapping** – Auto-align nodes for **better organization**.
- 🔜 **Import JSON Workflows** – Allow users to **re-import saved workflows**.

---

## 📌 How to Run the Project

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/workflow-dashboard.git
cd workflow-dashboard

or go to https://workflow-app-virid.vercel.app/
