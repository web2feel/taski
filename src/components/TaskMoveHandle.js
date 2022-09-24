import React from "react";

function TaskMoveHandle({ provided }) {
  return (
    <div
      className="text-black absolute top-0 left-0 w-full flex justify-center text-2xl"
      {...provided.dragHandleProps}
    >
      <span className="bg-slate-100 px-3 leading-none rounded-bl rounded-br">
        &#8943;
      </span>
    </div>
  );
}

export default TaskMoveHandle;
