# Objective

The idea of this app is to mess with `styled-components` and the `PropTypes` args drilling from React;

# Overview

The app has one single page with several cards.

These `Cards` are styled with `styled-components` where we pass to the to it, the properties received as arg on the usage of it (`App/index.js`).

Then, the validation happens inside the `Card/index.js`.

It is on it that we define the prop types of these args and also the default values of it.

# Dependencies

- `styled-components`: to style the app.
- `prop-types`: to check the prop types when prop drilling.
