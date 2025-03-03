import { TODO_ACTION, Action, TodoState, Todo } from "./todo.ts";

export function todoReducer(state: TodoState, action: Action): TodoState {
  switch (action.type) {
    case TODO_ACTION.CREATE_TODO:
      return [...state, new Todo(action.text)];
    case TODO_ACTION.UPDATE_TODO:
      return state.map((t) =>
        t.id === action.id ? new Todo(t.text, t.isCompleted, t.id) : t
      );
    case TODO_ACTION.DELETE_TODO:
      return state.filter((t) => t !== action.payload.todo);
    case TODO_ACTION.TOGGLE_TODO:
      return state.map((t) =>
        t.id === action.id ? new Todo(t.text, !t.isCompleted, t.id) : t
      );
    case TODO_ACTION.TOGGLE_ALL:
      return state.map((t) =>
        t.isCompleted === action.checked
          ? t
          : new Todo(t.text, action.checked, t.id)
      );
    case TODO_ACTION.CLEAR_COMPLETED:
      return state.filter((t) => !t.isCompleted);
    default:
      throw new Error("unknown action type");
  }
}
