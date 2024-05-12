import { useState } from "react";
import "../App.css";
export default function Input({ task, setTaskList }) {
  const [input, setInput] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    setTaskList([...task, input]);
    setInput("");
  }

  return (
    <form>
      <input
        className="mr-4"
        type="text"
        placeholder="add a Task to the Board"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        disabled={!input}
        onClick={handleAddTask}
      >
        Add
      </button >
    </form>
  );
}
