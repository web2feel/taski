import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useAppContext } from "../hooks/useAppContext";
import Column from "./Column";

function Board() {
  const { state, dispatch } = useAppContext();

  const stateArray = Object.keys(state);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    let payload = { destination, source };
    dispatch({
      type: "MOVE_TASK",
      payload,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {stateArray.map((status) => (
          <Column key={status} status={status} />
        ))}
      </div>
    </DragDropContext>
  );
}

export default Board;
