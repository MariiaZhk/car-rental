# Car Rental Web page

Welcome to the Car Rental Website, your destination for browsing a diverse selection of vehicles, applying filters, saving favorites, and accessing detailed information about each car. THere you can find the perfect rental vehicle to suit your needs.

## Table of Contents

- [Features](#features)
- [Links](#links)
- [Tech Stack](#tech-stack)

## Features

- **Home Page:** Provides a general overview of the company's services.
- **Catalog Page:** Displays rental offers for various cars, which can be filtered based on criteria. Upon loading the page, the backend fetches the first 12 car rental listings, and clicking the "Load more" button fetches the next 12 listings. Clicking the "heart" button on a listing adds it to the favorites list, changing the button color to blue. Clicking again removes it from the favorites list, reverting the button color to the initial state. A dropdown filter allows users to select a car brand for filtering, and searching for cars by brand occurs when clicking the "Search" button.
- **Favorites Page:** Displays cars that the user has added to the favorites list.
  If the user has not selected any favorite cars, an empty page is displayed with a suggestion to do so.
  Upon refreshing the page, the user's actions are preserved (selected cars remain in the favorites list) using local storage.
- **Learn More:** Clicking the "Learn more" button opens a modal window with detailed information about the car and its rental conditions.
  The modal window can be closed by clicking the "X" button, clicking on the backdrop, or pressing the Esc key.
  The "Rental car" button provides the user with the option to contact the company via phone at +380730000000.
- **Remove from Favorites:** Easily remove cars from your favorites on both the Catalog and Favorites pages.

## Links

1. GitHub repository: `https://github.com/MariiaZhk/car-rental`
2. Live page: `https://mariiazhk.github.io/car-rental/`

## Tech Stack

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- [Redux](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Vite](https://vitejs.dev/)
- e.t.c
