# lotr-app (alias: Adam_Kliegman_Project)

This is repository that contains the code for the LOTR API Explorer App, publically available on [https://lotr-app.herokuapp.com/](https://lotr-app.herokuapp.com/).

This is an app that demos using the `movies`, `characters`, and `quotes` models from [The One API](https://the-one-api.dev/) with an interface to allow developers to browse the models and read details about each entity within.

## Getting Started

### Prerequisites

- Node.js (version 19 or later)
- NPM (version 9)

_Older versions may work, but have not been tested._

### Installation

1. Clone the repository to your local machine.

In terminal:

```
git clone https://github.com/akliegman/Adam_Kliegman_Project
```

2. Install client dependencies.

In terminal:

```
# from root directory
npm install
```

4. Create .env file for your API key

Sign up for an access token here: https://the-one-api.dev/sign-up;

Create a `.env` or `.env.local` file in the root directory, with the following content:

```
REACT_APP_API_KEY={your api key from the-one-api.dev}
```

### Running the app

1. Start the client.

In terminal:

```
# from root directory
npm start
```

The server should be running on **localhost:3000**

### Additional terminal commands

1. Test the client using React-Testing-Library.

Note: this command runs any time you open a new PR.

```
# from root directory
cd client
npm run test
```

2. Build the client.

```
# from root directory
cd client
npm run build
```

## TODOs / next steps

- Expand test coverage
- Loading state / transitions
- Sorting / filtering functionality

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Redux](https://redux.js.org/) - A state container for the app.
- [SASS](https://sass-lang.com/) - CSS with (some outdated) superpowers.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - A testing utility for React that encourages good testing practices and is a major pain to use.

### Public With

- [Heroku](https://www.heroku.com/) - A cloud platform that lets you build, deliver, monitor, and scale apps.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

## Authors

- [Adam Kliegman](https://github.com/akliegman)
