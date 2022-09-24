import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useAppContext } from "../hooks/useAppContext";
import TaskDelete from "./TaskDelete";
import TaskMoveHandle from "./TaskMoveHandle";
function Task({ id, title, description, index, status }) {
  const { dispatch } = useAppContext();

  const handleDelete = () => {
    let payload = { id, status };
    dispatch({
      type: "DELETE_TASK",
      payload,
    });
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className="py-1"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="group p-4 bg-white rounded shadow relative">
            <TaskMoveHandle provided={provided} />
            <div className="flex justify-between items-start my-2">
              <h3 className="text-lg font-bold text-slate-600">{title}</h3>
              <TaskDelete handleDelete={handleDelete} />
            </div>
            <p className="text-slate-500">{description}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
