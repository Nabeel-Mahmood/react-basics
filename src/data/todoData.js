export const todos = [
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

export const addTodo = todo => {
  const maxId = todos.reduce((prev, cur) => (cur.id > prev ? cur.id : prev), 0);
  const { heading, detail, dueDate } = todo;
  todos.push({ id: maxId + 1, heading, detail, dueDate });
};