import CreateTodoInput from "./components/input.tsx";
import Footer from "./components/footer.tsx";
import { useReducer, useState } from "react";
import { TODO_ACTION, TODO_FILTER, TodoState } from "./todo.ts";
import TodoComponent from "./components/todo.tsx";
import { todoReducer } from "./reducer.ts";

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [filter, setFilter] = useState(TODO_FILTER.ALL_TODO);
  const [checked, setChecked] = useState(false);

  const handleCreateTodo = function (text: string) {
    dispatch({
      type: TODO_ACTION.CREATE_TODO,
      text,
    });
  };
  const handleToggleTodo = function (id: number) {
    dispatch({
      type: TODO_ACTION.TOGGLE_TODO,
      id,
    });
  };
  const handleToggleAll = function (checked: boolean) {
    dispatch({
      type: TODO_ACTION.TOGGLE_ALL,
      checked,
    });
  };

  const handleEditTodo = function (id: number, text: string) {
    dispatch({
      type: TODO_ACTION.UPDATE_TODO,
      id,
      text,
    });
  };

  const handleClearCompletedTodo = function () {
    dispatch({
      type: TODO_ACTION.CLEAR_COMPLETED,
    });
    setChecked(false);
  };

  const handleFilterChange = function (type: TODO_FILTER) {
    setFilter(type);
  };

  let filteredTodos: TodoState;
  switch (filter) {
    case TODO_FILTER.ALL_TODO:
      filteredTodos = todos;
      break;
    case TODO_FILTER.ACTIVE_TODO:
      filteredTodos = todos.filter((t) => !t.isCompleted);
      break;
    case TODO_FILTER.COMPLETED_TODO:
      filteredTodos = todos.filter((t) => t.isCompleted);
  }

  const activeLength = todos.filter((t) => !t.isCompleted).length;

  const onCheckChange = function (e: any) {
    setChecked(e.target.checked);
    handleToggleAll(e.target.checked);
  };

  return (
    <>
      <h1>todos</h1>
      <div style={{ display: "inline-block" }}>
        <input
          style={{ visibility: todos.length ? "visible" : "hidden" }}
          type="checkbox"
          checked={checked}
          onChange={onCheckChange}
        />
        <CreateTodoInput onCreateTodo={handleCreateTodo} />
        {filteredTodos.length ? (
          <ul>
            {filteredTodos.map((t) => (
              <TodoComponent
                todo={t}
                key={t.id}
                onEditTodo={handleEditTodo}
                onToggleTodo={handleToggleTodo}
              />
            ))}
          </ul>
        ) : null}
        {todos.length ? (
          <Footer
            todoLength={activeLength}
            onClearCompletedTodo={handleClearCompletedTodo}
            onFilterChange={handleFilterChange}
          />
        ) : null}
      </div>
    </>
  );
}
