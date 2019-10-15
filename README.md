# Trivia Game Coding Challenge

## Runtime instructions:
Run `npm i` if you haven't already installed all the packages.
Please have `nodemon` installed globally.
If not type: `npm i -g nodemon` in your console

When looking into the package.json you will notice a few commands:
`npm start` will run the following `NODE_ENV=production node index.js` so your production environment settings will take effect if you have any

`npm run-script dev-start` will run the code on the backend.
`npm run-script dev-build` will run the code for the frontend for webpack to properly bundle the react code.
`npm run-script build` will build the frontend code for production when necessary.

## Code breakup:
Both /app and /client have their respective eslint options.
I kept the server code basic since we were leveraging a third-party api rather than building out our own.

### Components

#### Container Components
Anything that contained core front-end logic was put into this folder. 
For a bigger project I would recommend dividing the containers folder into subfolders for ex. called triviaContainers, but the project wasn't big enough to warrant that.
To lower bundle size I also implemented an asyncComponent in order to import the rendered components of react-router only when they are needed.

#### Presentational Components
Anything that was re-usable and or relying heavily on React/Redux dispatch/useSelector hooks would be put into here.

## Styling:
Looking into the /public/ folder you will find that each .scss file is segmented either into resuable chunks like buttons, colors, or separated by front-end logic.
This is so when you look at where the styling is for the Home component, you can check _home.scss

## Redux
located in the components/redux folder:
Each reducer and actions is specific to a piece of the overall state following the following pattern:
difficultyActions || difficultyReducers