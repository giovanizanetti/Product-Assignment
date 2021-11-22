# My Products Assignment

## [Check out the deployed version here!](https://giovani-zanetti-products-assignment.netlify.app/)

## What this project is about

This project is part of a take-home assignment given by a company to check whether my skills are enough for a front-end software developer position.

## Table of contents:

- **[Installation](#installation)**
- **[Tests](#tests)**
- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**
- **[Requirements](#requirements)**
- **[Features built so far ](#features-built-so-far)**
- **[create-react-app-docs](#create-react-app)**

## Installation

You easily close this repo on your machine by using one of the following commands:

`git@github.com:giovanizanetti/Products-Assignment.git`

or

`https://github.com/giovanizanetti/Products-Assignment.git`

Once you have cloned the repo, you can run:
`yarn install` or `npm install` to download all the dependencies needed for the project to work on your machine.

## Tests

To run the test jusr run `yarn test` or npm `test'

## Technologies used

#### Click links to see the documentation for those technologies 👇👇👇

- **[React](https://reactjs.org/docs/getting-started.html)**
  - **[React hooks](https://reactjs.org/docs/hooks-intro.html)**
  - **[React `context API` with `useReducer` hook for managing the global state](https://reactjs.org/docs/context.html)**
- **[React-Router](https://v5.reactrouter.com/web/guides/quick-start)**
- **[React-Modal](https://www.npmjs.com/package/react-modal)**
- **[React-Icons](https://react-icons.github.io/react-icons/)**
- **[TailwindCSS](https://tailwindcss.com/docs)**
- **[Netlify](https://www.netlify.com/)**

## Goals for this project:

- Get an offer to work for this company.
- Make a working application.
- Practice software development. Practice and learn more about **[TailwindCSS](https://tailwindcss.com/docs)**
- Showcase some of what I can do.

## Requirements

1.  Navigate via a menu to a product:

        /product/posters
        /product/folders
        /product/businesscards

2.  See a product selector with available options (see json files in this Repo)
3.  Be able to select different options in the product
4.  Add a product to a cart
    5.Validate if the options is a possible option via the 'excludes' property.

## Features built so far

### 1. Cards menu on the home view `/`

- #### The cards are clickable and leads to the chosen product details component changing the route path. For instance: ` /product/posters`

### 2. Products details view `/product/:productName`

- #### Each product displays a list of all product properties
- #### Each property comes with a selectable dropdown menu that displays all options for a given property
- The user then can choose one option for each property
- The user can change the option choice before adding the product to the cart
- The option can be typed and/or searched on the selectable dropdown
- When an option is selected, the background color of the option is changed to green color

### 3. Add a product to the shopping cart `/cart`

- #### Validate if all the properties were assigned an option
- #### Display feedback to the user if not all properties were assigned an option
  - If all properties were assigned:
    - Add the product to the cart,
    - Ask if the user would like to proceed to checkout or go to the products list
- #### When a product is added to the cart
  - The cart's count, which is displayed on the header is reflected, therefore, increased.
  - The product with the product's properties and the chosen option for each property is displayed on the cart.

### 4.Cart

- #### The cart displays each product item followed by
  - A custom input number field used to increase or decrease the amount of the same product in the cart:
    - When the user tries to input a number below `1`, a confirm box will pop up and ask if the intention is to delete the product
    - The product will be deleted if the user confirms their intention, otherwise, the value remains `1` unit of the product
  - A delete button represented by a trash can icon that is used to delete the product from the cart
- #### The cart has a footer that contains one handler:
  - An `X` exit button, when clicked go back to the previous rote;
- #### The cart has a footer that contains two handlers:
  - A `BUY IT` button to lead to `cart/checkout`;
  - A `CANCEL` button to leave the cart and return to `/`.
- #### Empty cart:
  - If no items are in the cart, a message `The sopping cart is empty` will be displayed on the cart.

### 5.Header

- #### The application header contains a navigation with the following elements:
  - `Home` link which leads to`/`
  - A cart icon, which is a link that leads to `/cart`:
    - When there is no item in the cart, an outlined icon will be shown
    - If the cart contains at least one item, a filled icon will be shown
  - A badge in a pill shape format, which reflect the items in the cart

## Create React App

This project was scaffolded using the create-react-app CLI.

**[The standard create-react-app docs can be found here](./create-react-app-docs.md)**

## [Check out the deployed version here!](https://giovani-zanetti-products-assignment.netlify.app/)

If you have feedback, **[please drop me a line here!](https://www.linkedin.com/in/giovani-zanetti/)** or email me at zanetti.giovani@gmail.com
