# Campus Manager Website

### Functionality

I built his project using the NERD stack:
-- For the back-end, I utilized Express to handle HTTP requests and Sequelize to interface with the database.
-- For the front-end, I used React, Redux and React-Redux. All important state information (i.e. students and campuses) is managed by the Redux store. Less important one, like form data, is managed by stateful React components. Components that display student/campus data are connected to the Redux store. Side-effects (like AJAX requests), are encapsulated in thunks.

## Getting started

1. `npm install`
2. `npm run start:dev`.
3. You should now see "Listening on port 4000" logged out in the terminal.
