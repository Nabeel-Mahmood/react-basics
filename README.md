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

### 4. Add routing to your application.

Because we are making web applications we want to be able to navigate to views instead of doing everything on one page.

You will now refactor your application so that you can navigate to an Add Todo screen where you can add your new Todo and
then you can navigate again to a screen showing the list of Todos.

**Using Routes**

Use React Router v4 so that `localhost:xxxx/todos` displays your list of Todos and `localhost:xxxx/todos/new` displays your
Add Todo screen. 

**Using Navlink**

Add a link on the Todos screen so that you can navigate to the Add Todo Screen.

On the Add Todo screen, add a link to navigate back if you want to cancel.

**Using history**

Automatically navigate back to the Todos screen once the Todo has been successfully added.

**Bonus**: Update the document title of your application when you visit each screen so it reflects the current application state. Also
add some focus management to your application to focus the first input on the Add Todo screen when it loads and to focus the 
header on the Todos screen when it loads.

### 5. Edit an existing todo.

It is also handy to go and edit the todos currently on the page.

Reuse the EditTodo component to not only add Todos but to also edit existing todos on a new url `localhost:xxxx/todos/{id}`.

Use links in the list to navigate to the edit page for each todo.

Fetch the individual todos with the id from the url by using the `getTodo` call and update a Todo with the `updateTodo` call.

Make sure that the saving spinner still works.

You may have to refactor the EditTodo component.