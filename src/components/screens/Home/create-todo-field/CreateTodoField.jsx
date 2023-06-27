import React, { useState } from "react";

export const CreateTodoField = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-3 mt-10 w-full">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
      />
    </div>
  );
};
