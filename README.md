# Getting Started with Create React App

This project uses data fetched from https://www.openbrewerydb.org/documentation#search-breweries.
All breweries are loaded onto an interactive map (Pigeon Maps) which a user can interact with to get more info on a selected brewery and/or filter the breweries based on brewery type.

# Installation

In the project directory, you can run:

### `npm install`
 and 
 ### `npm start`
 
 to get the project up and running.

Runs the app in the development mode.\
Open http://localhost:3000 to view it in your browser.

# Technology Used
- React/JavaScript (ES6)
- Bulma
- Pigeon Maps
- React-Query
- SASS
- GitHub
- Git

# **My Approach** #
I decided to use React-Query to manage my data request to remove the need to put the data inside the global state.
I still used Reacts useState hook to manage other variables that would be updated by the user.

**Map**
Rendering the Pigeon Map initially, I loaded all the breweries onto it via mapping the data to return markers for each brewery. I wanted the user to be able to click on a marker to get more info and for the map to zoom in on it. I achieved this by creating a function, that would take deconstructed values from the element within the map function and return a HTML element rendering what I considered relevant info, including a hyperlink to their website and contact details. Here is where I ualso called the hooks to set state for the relevant variables (zoom and mapCenter) to render the map more clearly onto that specific brewery.

**Filter**
I created a filter based on the brewery type. I used Bulmas 'Select' component and created a custom filter function that takes the value of the filter selected and uses it to filter the data rendered on the map. This is done by using the setState hook again to update the data.

# Challenges
As this was a timed piece of work there were some considerations and improvements I would of liked to have implemented if I had more time.

1. Use react-querys mutate state to update the response data when a filter value is selected, as there is an endpoint which accepts this.
2. I found an issue with trying to update my variable breweryData which I initially set to use the response data from the react-query call. I found that after the first render this would remain empty. The best approach would be to do as described above and use mutate state to update the response data. As time was running out I have left it using a conditional operation in which if breweryDatas length is greater than 0, use breweryData, or else use the response data.

# Future Features
1. Use react-querys mutate state.
2. Add more filter options such as State and District.
3. Create a function where markers that have been clicked on change to a different colour to let the user know which ones they have and haven't checked out.
