import { observable } from '@legendapp/state';
import { syncObservable } from '@legendapp/state/sync';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';

// Type your Store interface
export interface Todo {
  id: number;
  text: string;
  completed?: boolean;
}

export interface Store {
  todos: Todo[];
  total: number;
  numCompleted: number;
  addTodo: () => void;
}

// Create a global observable for the Todos
let nextId = 0;
export const todoStore$ = observable<Store>({
  todos: [],
  // Computeds
  total: (): number => {
    return todoStore$.todos.length;
  },
  numCompleted: (): number => {
    return todoStore$.todos.get().filter((todo) => todo.completed).length;
  },
  addTodo: () => {
    const todo: Todo = {
      id: nextId++,
      text: '',
    };
    todoStore$.todos.push(todo);
  },
});

syncObservable(todoStore$, {
  persist: {
    name: 'todoStore',
    plugin: ObservablePersistLocalStorage,
  },
});
