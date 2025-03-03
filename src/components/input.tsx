import { useState } from "react";

export default function CreateTodoInput({
  onCreateTodo,
}: {
  onCreateTodo: (text: string) => void;
}) {
  const [text, setText] = useState("");

  const onTextChange = (e: any) => setText(e.target.value);

  const handleTodoCreate = function (e: any) {
    if (e.code === "Enter") {
      onCreateTodo(text);
      setText("");
    }
  };

  return (
    <>
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={onTextChange}
        onKeyDown={handleTodoCreate}
      />
    </>
  );
}
