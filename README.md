# Sketch Coding Challenge

This is my attempt to solve the requested development exercise for the open job position evaluation
as a Front-end Developer.

## Information about the technology stack

- **Framework/library:** ReactJS
- **State Management:** Context API & Hooks
- **Styling:** Styled Components
- **HTTP Client:** apollo-fetch
- **Code formatting:** Prettier

NOTE: Application is based on `create-react-app` with a few additional dependencies.

### Development Time

_Disclaimer:_ Although when the instructions asked not to invest too much time, the exercise seemed a great opportunity
for ne to finally research the React Context API and try to implement a basic state management along
with Hooks instead of use Redux. Also, this was a good oportunity to explore and learn about Styled Components.
I have invested most of the time on this learning and research these technologies.

Time breakdown:

- 9hs: for Research an learning Context API and Styled components.
- 6hs: for the application development.

The development took me about 15 working hours splitted in 3 sessions.

## Setup Instructions

1.  Clone repository
2.  Run `yarn install` to install project dependencies
3.  Open another the Terminal in the project path and execute `yarn start`. A browser window should open automatically.
    Alternatively visit [http://localhost:3000/](http://localhost:3000/)

## Notes

- I tried to implement the same styles architecture that I usually use in SASS/SCSS.
- Context API was chosen for simplicity and learning reasons.
- A minimum responsive implementation is provided.

## Possible Improvements to be made

- Optimize re-renders in React: apply memoization and use split contexts.
  https://github.com/facebook/react/issues/15156
- Error catching and management for data fetching.
- Implement an Error Boundary to manage application errors.
- Utilize an SVG sprite to normalize and optimize icons usage.
- Add a build task for assets and static files.
- Create and reuse general markup containers for components.
- The navigation data generated in `ArtboardView` is a mess. I'm sorry 😔.
- Render the Topbar only in one place and determine the mode based on route, requirements, etc.
- Implement Stylelint and ESLint,
- Add Environment settings and configuration managed by _dotenv_ and `.env` files.
- Implement something similar to SASS _@mixins_ in Styled Components.

## Known Issues

- There is a problem with the `separator.svg` that is barely visible when rendered.

**Author:** Sebastián Veggiani
