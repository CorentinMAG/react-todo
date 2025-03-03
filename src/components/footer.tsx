import { TODO_FILTER } from "../todo.ts";

export default function Footer({
  todoLength,
  onClearCompletedTodo,
  onFilterChange,
}: {
  todoLength: number;
  onClearCompletedTodo: () => void;
  onFilterChange: (filter: TODO_FILTER) => void;
}) {
  return (
    <div>
      <span>{todoLength} items left!</span>
      <div>
        <button onClick={() => onFilterChange(TODO_FILTER.ALL_TODO)}>
          All
        </button>
        <button onClick={() => onFilterChange(TODO_FILTER.ACTIVE_TODO)}>
          Active
        </button>
        <button onClick={() => onFilterChange(TODO_FILTER.COMPLETED_TODO)}>
          Completed
        </button>
      </div>
      <button onClick={onClearCompletedTodo}>Clear completed</button>
    </div>
  );
}
