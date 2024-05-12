function Task({ taskonBoard, index, onDelete }) {
  function handleDeleteTask() {
    onDelete(index);
  }
  return (
    <div className="task">
      <p> {taskonBoard}</p>
      <button
         className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 me-4 mb-2 dark:bg-red-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleDeleteTask}
      >
        Delete
      </button>
    </div>
  );
}

export default Task;
