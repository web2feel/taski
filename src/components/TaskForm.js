import React, { useState } from "react";
import { nanoid } from "nanoid";
function TaskForm({ status, dispatch }) {
  let taskData = { id: "", title: "", description: "" };

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(taskData);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    let payload = { status, data: { ...formData, id: nanoid() } };
    dispatch({
      type: "ADD_TASK",
      payload,
    });
    setFormData(taskData);
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <div className="p-3 bg-slate-300 rounded">
          <form id={status} onSubmit={handleForm}>
            <div className="flex flex-col gap-2">
              <input
                required
                placeholder="Enter Title"
                className="rounded border-slate-300"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <input
                required
                placeholder="Enter Description"
                className="rounded border-slate-300"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </form>
          <div className="flex gap-2 mt-2">
            <button
              form={status}
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded text-white cursor-pointer"
            >
              Submit
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-6 py-3 bg-slate-600 hover:bg-slate-700 rounded text-white cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setShowForm(true)}
          className="px-4 py-3 bg-slate-50 hover:bg-slate-300 text-slate-500 text-center rounded cursor-pointer shadow"
        >
          Add New Task
        </div>
      )}
    </div>
  );
}

export default TaskForm;
