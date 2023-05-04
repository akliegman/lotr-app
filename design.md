# Notes on the App's design

- This app is publically available at [https://lotr-app.herokuapp.com/](https://lotr-app.herokuapp.com/).

- This app was built with React + Typescript + Redux via `create-react-app`, for simplicity's sake. I spent ~10hrs on it.

- Instead of mirroring the API directly, I decided to simply use the `movies`, `characters`, and `quotes` endpoints, store them in Redux, and handle new selections / calls via redux rather than to continue to call the-one-api.dev. This is becausee the-one-api.dev has pretty substantial rate-limiting and I wanted to avoid errors.

- Since there was soome overlap between each of the models, I tried to make them cross-linkable. For example, each quote detail displays the character's name, and is clickable so that you can easily navigate to that character and see their detail page. Alternatively, you can see quotes from specific movies on movie detail pages. I also created client-side pagination, rather than using API pagination, to keep the UX smooth and the amount of calls down.

  - More specifically, I stored each of the models in its own redux slice, and only selected from th stored data as needed at the component level.

- As for frontend architecture, I kept it simple by keeping all API-related methods in the `api` directory, a `page` directory for each specific view, `components` for all react components, global styles in the `styles` directory (with module-specific styles next to their corresponding components), `types` for global types, `utils` for global utility functions ,etc. The structure of the code should be self-explanatory. With more time, I would probably abstract out some of the components and pages to avoid redundancy, but given the time crunch, I just built what I built and ran with it with littl refactorying.

- Due to lack of time, testing coverage is quite limited, but I made sure to test the client being able to render the data from store, in `src/layouts/App/App.test.tsx`. With more time, I would add far more component-specific tests, as well as tests that don't simply mock the fetched data, but actually test the endpoints and redux store themselves. Luckily, TypeScript is quite powerful and helps me to avoid common JS-level mistakes/pitfalls.

- As for design and CSS, I chose to build something from scratch using css modules and SASS mixins for abstractions. While this wasn't my preferred way or most efficient method, I did this to reduce time setting up configurations for a larger framework. For a bigger project, I would certainly prefer a fully-baked design system to this rather bespoke methodology.

  - I designed the page to have the look and feel of LOTR, using warm, medieval style coloring and typeface, based off of a simple wireframe I built in Figma. I chose all colors and typefaces with a little bit of experimenting, but tried not to overdo it.

  - I designed the UX to "make it easy for developers to consume information about the trilogy", as per the spec, so in that sense, I tried to ensure that the design met the needs of the user (developers want to say payloads, endpoints, etc.), while also feeling somewhat delightful (ease-of-use to click around and read data).

  - I quickly made some LOTR-themed icons, but admittedly did not spend a ton of time on that, or other deep visuals for UX, such as transition states, loading screens, etc. With more time, I would definitely do that.

  - The app should be fully responsive
