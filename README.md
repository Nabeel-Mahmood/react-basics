# React Basics application.

Welcome to the React Basics application. The aim of this application is to teach the Basics
of building web applications with React.

## Assignments

Each assignment will follow on the result of the previous assignment. The solutions to each
assignment will be published under branches of this repository.

### 1. Display the Todo's.

Use the data in `todoData.js` to display a list of to do elements on the main page of the application.

Once that is working break the display of a single todo out into functional component instead.

### 2. Add a new Todo.

On the same page as the Todo list you have just made, add a form to add a Todo.

The `todoData.js` file has an `addTodo` function you can use.

Use controlled `<input>` fields to build the form. Give the form a `submit` button. Understand the different types of `buttons`.

Add fields for:

- heading
- detail
- dueDate

Ensure all your `<input>` fields have accessible labels.

**Bonus**: Add some basic HTML landmark semantics to your application. Use and understand the following tags: `<main>`, `<section>`, `<h2>`  

### 3. Make you add Todo page asynchronous.

Now that you can add a Todo to the list and display it, let's go an simulate a more normal client-server environment.

We will now use Promises to asynchronously fetch and update the data. Understand the basic success path of a Promise.

Using the `todoDataAsync.js` file instead, make use of `getTodos` to fetch the data asynchronously. The data has a hardcoded
500 millisecond delay so you can see the effect of the asynchronous code.

Display a loading text instead of your list when the data has not been fetched yet.

Refactor your add Todo functionality to use the new asynchronous `addTodo` function. Server calls usually return the modified data in the response
so you can use the response of this function to update your list.

Remember to clear your data after the add.

**Bonus**:  Use the `spinner` class in CSS to display a saving spinner on your button while the data is being saved (check our the `classnames` npm package to help
with toggling CSS classes in your React code). Set the `<input>` fields as
readonly while the data is saving. You may need to use the callback functionality of `setState` to properly time the setting and unsetting 
your saving flag on the state.  