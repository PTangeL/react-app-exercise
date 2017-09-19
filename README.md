# ReactJS fundamentals

## Exercise objectives
On completion of this exercise students will understand:
- Some basic React patterns
- Routing with [React Router v4](https://reacttraining.com/react-router/web/guides/philosophy)
- Data fetching in React
- Forms management.

## Requirements
You need to have `node` (at least version 4.4.5) and git installed in your computer.

## Getting started:

Clone [this repository](https://github.com/leanjscom/react-app) and run `npm start`

`git clone https://github.com/leanjscom/react-app-exercise && cd react-app-exercise && yarn install`

Now you can run your application by running: `npm start`

## Exercise

1. Implement the following route http://localhost:3000/#/workshops so it renders src/components/workshop/WorkshopList. Hint, you need to edit 2 files:
    1. One file is the one where you define the /workshops &lt;Route&gt;. Which file is that? Identify the component that is going to be the parent of WorkshopList
    2. The second file is src/components/layout/NavDrawer.js, edit the &lt;MenuItem&gt;

2. Refactor the last &lt;Route&gt; in src/components/App.js (the one that renders the "not found page"), so it uses the src/components/NotFound.js component. You can use this url for testing http://localhost:3000/#/this-page-does-not-exist

3. Refactor UserList so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005). You have a UserListContainer file with some comments and tips. Hint: You will also have to edit src/components/App.js

4. Refactor UserProfile so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005). Hint: You will also need to edit src/components/UserList.js

5. Move the logic on lines 42-48 of UserProfile to UserProfileContainer. HINT: Use the [componentWillReceiveProps()](https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops) lifecycle method

6. Login (http://localhost:3000/#/login) should not display the NavDrawer and AppBar. HINT: Why not try moving the Login component up the tree

7. Finish the implementation of the Login Component (located in src/components/Login.js). Requirements:
    1. The state of the inputs should be managed by the Login component (is that a controlled or uncontrolled component?). Hint: use the onChange event in the inputs
    2. Handle the onClick button to validate the inputs. For validation you can use password: 1234 and username: reactfanboy
    3. If the validation is correct redirect the user to the home page. Hint: you need the router. To inject the router use withRouter from 'react-router-dom'.

8. Make all components where possible stateless components (components as functions instead of classes). Components should be stateless components if either i) they don't manage state or ii) they don't use a livecycle method. Further reading (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.oy1l2u2ew)

## Extra bonus

1. Implement WorkshopList and WorkshopListContainer using this data  http://localhost:3000/data/workshops.js
If you have finished all the previous tasks, you can do the following:

2. When displaying the UserList (http://localhost:3000/#/users):
    1. If the screen is LARGE (you can use { LARGE } from 'material-ui/utils/withWidth'), UserList should only take up 50% left of the view. The 50% on the right should be empty, so UserProfile (e.g. http://localhost:3001/#/users/crazytiger134) will fill that empty space without resizing UserList.
    2. If the screen is not LARGE and the url is http://localhost:3000/#/users, UserList should take up 100% of the view

3. When displaying the UserProfile (e.g. http://localhost:3001/#/users/crazytiger134). If the screen is not LARGE (you can use { LARGE } from 'material-ui/utils/withWidth'), you should only display UserProfile and "hide" UserList

## Data fetching libraries

This project is using the following fetch polyfill: https://github.com/github/fetch. There are other options if you want to change it. You can have a look at some of the available libraries here: http://andrewhfarmer.com/ajax-libraries/

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
