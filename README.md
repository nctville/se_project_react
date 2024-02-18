What to wear application

Description
This is the first stage of an app that will use weather information based on the users location and provide clothing recommendations.

Additional, functionality will include the ability to upload images and garment descriptions based on weather types.

Initially, latitide and longitude are fixed, as well as the current options for garments.

Technology used

Create React App

Figma

Link to project Figma

Application preview

React
The markup has been ported to JSX and:
Is included within ( ). Has been moved to the corresponding components.

Components:
Hooks are not used inside conditional statements. Hooks are called in a component's main function. Class components - the effects are described inside the component lifecycle methods.

All state variables from the brief have been created and defined within the components specified in the brief.

The initial state of state variables contains the correct data type.

All of the features listed in the brief have been implemented and are functioning properly:
Across all components:
Contain all the items listed in the brief Accepted required props mentioned in the brief

The CurrentTemperatureUnitContext context should meet the following requirements:
Exported from a separate file in the contexts directory. Imported in Main, ToggleSwitch, and WeatherCard components. Embedded in the App component via CurrentTemperatureUnitContext.Provider. Has currentTemperatureUnit and handleToggleSwitchChange values for the provider.

The App component
Includes Header, Main, Footer, ModalWithForm, and ItemModal components. Makes an API request for the weather data (only once — on mounting). Saves default clothing items in the state. Makes API requests for the mock server. Saves the current temperature unit and handles the toggle switch change. Saves the added clothing item.

The Header component
Calculates the current date. Includes ToggleSwitch (which renders a checkbox with the state saved in the context). Includes a button for opening AddItemModal (which renders a modal for adding a clothing item and uses the ModalWithForm). Includes navigation links to the main and profile pages.

The Main component includes WeatherCard (which displays temperature in Fahrenheit), and an array of ItemCard (which renders an image and title of a clothing item) components.

The Profile component includes SideBar (which displays user name) and ClothesSection (which displays all the clothing items) components.

The ModalWithForm component renders a modal with a form.

The ItemModal component renders the modal with item image, title, and delete button.

The utils files contain
Coordinates object with latitude and longitude fields The API key for the Weather API Weather API fetch and filter methods Logic for defining temperature Mock API fetch methods

Routing
The components and are used correctly. Clicking the logo leads to the main page (/) Clicking the profile info leads to the profile page (/profile)

API interaction
The api.js and weatherApi.js files, in which requests to the server were described, and created.

Each method which enables making requests to the server contains return fetch, e.g. returns a Promise object.

Server responses always checks for correctness.

Each promise contains code for processing errors after making a request to the server.

Weather API:
There is one GET request for fetching the forecasted weather.

Mock API:
There is the db.json file with a database with some cards placed in the root folder of the project. There are three API calls: GET /items, POST /items, and DELETE /items/:id.

Heres a link to my github repo:
https://github.com/nctville/se_project_react