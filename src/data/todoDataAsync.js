export let todos = [
  {
    id: 1,
    heading: 'Buy eggs',
    detail: 'Remember to get free range eggs.',
    dueDate: '10-12-2017'
  },
  {
    id: 2,
    heading: 'Walk the dog',
    detail: 'Before 16:00 when the park is closed for the evening.',
    dueDate: '12-12-2017'
  },
  {
    id: 3,
    heading: 'Clean house',
    detail: 'Parents are coming on Saturday.',
    dueDate: '13-12-2017'
  },
  {
    id: 4,
    heading: 'Wash the car',
    detail: 'The full wash with chassis clean as they started salting the roads again.',
    dueDate: '17-12-2017'
  },
  {
    id: 5,
    heading: 'Renew Webstorm subscription',
    detail: 'Check out the special running till year end.',
    dueDate: '10-12-2017'
  },
  {
    id: 6,
    heading: 'Book holiday',
    detail: 'Check airline specials for holiday in 2018',
    dueDate: '01-12-2017'
  }
];

export const getTodos = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todos);
    }, 800);
  });
};

export const addTodo = todo => {
  const maxId = todos.reduce((prev, cur) => (cur.id > prev ? cur.id : prev), 0);
  const { heading, detail, dueDate } = todo;
  todos.push({ id: maxId + 1, heading, detail, dueDate });
  return getTodos();
};

const getTodoById = id => todos.filter(todo => todo.id === parseInt(id, 10))[0];

export const getTodo = id => {
  const todo = getTodoById(id);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todo);
    }, 800);
  });
};

export const updateTodo = (id, updatedTodo) => {
  const todo = getTodoById(id);
  const { heading, detail, dueDate } = updatedTodo;
  const newTodo = Object.assign({}, todo, { heading, detail, dueDate });
  todos = todos.map(todo => {
    if (todo.id === parseInt(id, 10)) {
      return newTodo;
    } else {
      return todo;
    }
  });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(newTodo);
    }, 800);
  });
};