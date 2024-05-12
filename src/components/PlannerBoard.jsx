import Task from "./Task";
import { useEffect } from "react";

export default function PlannerBoard({ taskList, setTaskList }) {
  /* useEffect(() => {
    const storedTaskList = localStorage.getItem("taskList");
    if (storedTaskList) {
      setTaskList(JSON.parse(storedTaskList));
    }
  }, []);*/

  function deleteTask(index) {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  }

  const TaskJSX = taskList.map((task, index) => (
    <Task
      className="py-8 shadow-lg"
      key={index}
      index={index}
      taskonBoard={task}
      onDelete={deleteTask}
    />
  ));

  return (
    <div className="board">
      {TaskJSX}
    </div>
  );
}
