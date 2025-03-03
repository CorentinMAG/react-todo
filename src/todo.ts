export type Action =
  | { type: TODO_ACTION.CREATE_TODO; text: string }
  | { type: TODO_ACTION.UPDATE_TODO; id: number; text: string }
  | { type: TODO_ACTION.TOGGLE_TODO; id: number }
  | { type: TODO_ACTION.DELETE_TODO; payload: { todo: Todo } }
  | { type: TODO_ACTION.TOGGLE_ALL; checked: boolean }
  | { type: TODO_ACTION.CLEAR_COMPLETED }
  | { type: TODO_FILTER.ALL_TODO }
  | { type: TODO_FILTER.ACTIVE_TODO }
  | { type: TODO_FILTER.COMPLETED_TODO };

export enum TODO_ACTION {
  CREATE_TODO = "CREATE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  DELETE_TODO = "DELETE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  TOGGLE_ALL = "TOGGLE_ALL",
  CLEAR_COMPLETED = "CLEAR_COMPLETED",
}

export enum TODO_FILTER {
  ALL_TODO = "ALL_TODO",
  ACTIVE_TODO = "ACTIVE_TODO",
  COMPLETED_TODO = "COMPLETED_TODO",
}

export type TodoState = Array<Todo>;

export class Todo {
  static id: number = 0;

  #id: number;
  #text: string;
  #isCompleted: boolean;

  constructor(text: string = "", isCompleted: boolean = false, id?: number) {
    this.#text = text;
    this.#isCompleted = isCompleted;

    if (id === undefined) {
      this.#id = Todo.id + 1;
      Todo.id++;
    } else {
      this.#id = id;
    }
  }

  get text(): string {
    return this.#text;
  }

  set text(value: string) {
    this.#text = value;
  }

  get id(): number {
    return this.#id;
  }

  get isCompleted(): boolean {
    return this.#isCompleted;
  }
}
