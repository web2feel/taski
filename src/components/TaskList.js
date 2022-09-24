import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
function TaskList({ status, state }) {
  return (
    <Droppable droppableId={status}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="taskList rounded mb-2"
        >
          {state[status].map((task, index) => (
            <Task key={task.id} index={index} {...task} status={status} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TaskList;
