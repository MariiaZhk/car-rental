# Car Rental Application

## Description

This application consists of three main pages:

### Home Page:

Provides a general overview of the company's services and a link to the car catalog.

### Car Catalog Page:

- Displays rental offers for various cars, which can be filtered based on criteria.
  Upon loading the page, the backend fetches the first 12 car rental listings, and clicking the "Load more" button fetches the next 12 listings.
  Clicking the "heart" button on a listing adds it to the favorites list, changing the button color to blue. Clicking again removes it from the favorites list, reverting the button color to the initial state.
- A dropdown filter allows users to select a car brand for filtering, and searching for cars by brand occurs when clicking the "Search" button.
- Clicking the "Learn more" button opens a modal window with detailed information about the car and its rental conditions.
  The modal window can be closed by clicking the "X" button, clicking on the backdrop, or pressing the Esc key.
  The "Rental car" button provides the user with the option to contact the company via phone at +380730000000.

  ### Favorites Page:

  Displays cars that the user has added to the favorites list.
  If the user has not selected any favorite cars, an empty page is displayed with a suggestion to do so.
  Upon refreshing the page, the user's actions are preserved (selected cars remain in the favorites list) using local storage.
  Each page includes a header with navigation and a footer with contact information.

  > > > > > > > > >

  ## Test Task

  Create an application for a company that offers car rental services in Ukraine. The application consists of three pages:

1. Home page with a general description of the company's services. Styling and design are at your discretion.
2. Car catalog page with cars of different configurations that users can filter by brand, hourly rental price, and mileage.
3. Favorites page with announcements that the user has added to favorites. The application's appearance should include navigation (styled at your discretion) and a viewing area.

## Technical Task

1. Implement the advertisement card for renting a car according to the layout.
2. The first catalog page should render 12 advertisements, and the rest should load on the "Load more" button click.
3. Clicking the "heart" button on the advertisement card should add it to the favorites list, changing the button color.
4. When refreshing the page, the final result of the user's actions should be fixed. For example, if you add an advertisement to favorites and refresh the page, the button remains in the "favorite advertisement" state with the corresponding color.
   Clicking the "heart" button again should remove the advertisement from the favorites list, changing the button color to the initial state.
5. Clicking the "Learn more" button should open a modal window with detailed information about the car and its rental conditions.
6. The modal window should close by clicking the "X" button, clicking on the backdrop, or pressing the Esc key.
7. The mileage of the car in the code should be specified as a single value (e.g., 4500), but in the UI, it should be displayed with a comma (4,500).
8. Implement the "Rental car" button as a link that allows the user to contact the company by phone at +380730000000.
9. Add filtering options:
   dropdown with car brands (use makes.json) - show advertisements with cars of the selected brand.
10. Create routing using React Router. The application should have the following routes:
    "/" - home page with a general description of the company's services.
    "/catalog" - page with a catalog of cars of different configurations.
    "/favorites" - page with advertisements added by the user to favorites.
    If the user navigates to a non-existent route, redirect them to the home page. 11. For working with the list of advertisements, create your personal backend for development using the UI service https://mockapi.io/. Create an "adverts" resource, use the resource constructor, and describe the advertisement object as mentioned below.

Advert Object

1. Create an "advert" in M**Mockapi** with the following fields:`id`, `year`, `make`,
   `model`, `type`, `img`, `description`, `fuelConsumption`, `engineSize`,
   `accessories`, `functionalities`, `rentalPrice`, `rentalCompany`, `address`,
   `rentalConditions`, `mileage`.
2. Create a base with at least 32 advertisements with different values. Implement pagination, where one pagination page should accommodate 12 advertisements. Pagination should be implemented on the Mockapi side.

## Evaluation Criteria

- The layout is fixed in pixels, semantic, and valid.
- Mandatory use of Redux.
- Axios library is used for requests.
- Pagination is implemented on the backend.
- No errors in the browser console.
- Interactivity works according to the technical task.
- The code is formatted and does not contain unused code.
- The repository must have a documented **README.md**.
- The project is deployed on **github pages** або **netlify.com**
