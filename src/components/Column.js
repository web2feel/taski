import React from "react";
import TaskList from "./TaskList";
import { useAppContext } from "../hooks/useAppContext";
import TaskForm from "./TaskForm";
function Column({ status }) {
  const { state, dispatch } = useAppContext();
  return (
    <div className="column">
      <div className="taskTitle mb-2 text-xl flex justify-between bg-gradient-to-r from-slate-800 to-slate-700 text-white py-4 px-4 rounded">
        <h2 className="font-bold">{status}</h2>
        <div className="bg-indigo-500 px-3 rounded">{state[status].length}</div>
      </div>
      <TaskList status={status} state={state} />
      <TaskForm status={status} dispatch={dispatch} />
    </div>
  );
}

export default Column;
