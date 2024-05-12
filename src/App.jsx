import { useState } from "react";
import Input from "./components/Input";
import PlannerBoard from "./components/PlannerBoard";
import "./App.css";
function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="app">
      <h3>TO Do Board </h3>
      <Input
        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        task={taskList}
        setTaskList={setTaskList}
      />
      <PlannerBoard
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default App;
