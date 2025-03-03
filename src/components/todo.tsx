import { useState } from "react";
import { Todo } from "../todo.ts";

export default function TodoComponent({
  todo,
  onEditTodo,
  onToggleTodo,
}: {
  todo: Todo;
  onEditTodo: (id: number, text: string) => void;
  onToggleTodo: (isChecked: number) => void;
}) {
  const [text, setText] = useState(todo.text);

  const handleEditTodo = function (e: any) {
    setText(e.target.value);
    onEditTodo(todo.id, e.target.value);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onToggleTodo(todo.id)}
      />
      <input type="text" value={text} onChange={handleEditTodo} />
    </div>
  );
}
