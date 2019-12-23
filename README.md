## Setup Instructions
### `yarn`
To download all the dependencies. It a prerequisite and a necessary command to make the application work.

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### `yarn test`
Launches the test runner in the interactive watch mode.<br />

### `yarn build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Overview
Whenever user searches for a keyword in the provided input field and hit enter, an action is triggered which makes an api call to get the data from giphy servers. Max count of data is set as 25. This data is stored inside an array. I have also added infinite scroll behaviour, which automatically gets more data as user scrolls down for the input keyword. 
When user searches for a new keyword, then state is refreshed and the newly available data is displayed in grid format.

## Folder Structure Breakdown
1. Public - Contains the static index.html file and png assets
2. src->components - Contains features codebase separated out in respective folders. Each feature has a index.js file, functional components required and redux folder (in search feature)
3. src->store - It is the store which is being passed down to the App component from index.js file
4. src->components->Result - REsult feature, entry point is index.js file which takes the data from the state and displays all available gif's iteratively.
5. src->components->Search - This feature contains redux folder which has its own actions and reducer file. Entry point is index.js file and there is a types.js file which has all the available actions types.


## Components Breakdown

I have divided the whole application into 2 components based on required features:
    1. Search Component
        - It takes the input from the input field and dispatches an action fetchGifData(input) which makes an api call to giphy     to get all the gif's with the matching input keyword.

    2. Results Component
        It displays all the available gif's in a space optimized grid. Each Gif has a own functional component Gif.js which takes care of the play/pause buttons and their internal state handling

All the actions are triggered by Search component, as a result of which after getting the data from the api call, state updation takes place. Whenever there is any state change, Results component renders the updated list of gif's.
    
## Libraries Used
1. React-redux - For state management
2. React-Router-dom - For navigation (In this case, I am always displaying the mainpage. I added this to incorporate more pages and views for future development)
3. axios - To make all api calls (GET requests in this case)

## Extra Work Added
1. Added react-router-dom library so that we can display multiple pages as the application grows. for ex: If I want to open a separate page whenever a gif is clicked, with more specific information about the gif, this could be easily achieved with this.
2. Infinite Scroll - Added this feature to automatically add the data when user scrolls down for more gifs. At a time, api call gives back 25 gifs. I have also stopped making api calls when there are no more gifs available for a keyword and everything is available on the webpage.
