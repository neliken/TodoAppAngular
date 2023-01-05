export const routes = [
  {
    path: '',
    loadChildren: () => import('../todo/todo.module').then(m => m.TodoModule)
  }
];
