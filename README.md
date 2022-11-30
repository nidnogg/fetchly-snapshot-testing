# fetchly-integration-testing

This repository contains the sample code for integration testing with React, used in the [Fetchly Labs](https://www.fetch.ly/) tutorial.

It's been bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tutorial

The app consists of two components, `App.js` and `Header.js`, of which only the latter will be tested. The header is composed of a base header text, tied to that component's state, and that changes based on a button.

We want to test that the header text changes to a specific desired value, in this case, from *"Change the header text by clicking on the button"* to *"Header text changed"*.

To write an integration test for it, a file called `Header.test.js` has to be created.

Inside, the following steps can be followed:

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
```

Here, we import the `Header` component itself, alongside a handful of utilities from `react-testing-library`.
* render renders the Header component;
* screen is used to fetch elements that are to be tested and many other things;
* fireEvent is necessary for testing the button click functionality.

After the imports, the following clause can be used as a starting point, rendering the header component:

```javascript
describe('Header', () => {
    test('change the text to Header text changed after clicking the button', async () => {
        render(<Header />)
        // Test code here
    })
})
```

This will render the `Header.js` component and set the stage for testing its functionalities. We need to cover a few steps therein, all performed in the *"Test code here*" part of the code, inside the second callback function:

First, get elements that will be tested. This can be done via `screen`:
```javascript
const button = screen.getByRole('button')
const headerText = screen.getByRole('heading', ('Change the header text by clicking on the button'))
```

Check that the button works okay - we can see if it contains the text set in the .HTML file, if it's enabled to be clicked by the user and so forth:

```javascript
expect(button).not.toBeDisabled()
expect(button).toHaveTextContent('Click me')
```

Perform the click event via fireEvent:

```javascript
fireEvent.click(button)
```

Finally, check for the resulting change from the button click in the header.

```javascript
expect(headerText).toHaveTextContent('Header text changed')
```

In the end, you should have something like this in `Header.test.js`:

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('change the text to Header text changed after clicking the button', async () => {
        render(<Header />)

        const button = screen.getByRole('button')
        const headerText = screen.getByRole('heading', ('Change the header text by clicking on the button'))

        expect(button).not.toBeDisabled()
        expect(button).toHaveTextContent('Click me')

        fireEvent.click(button)

        expect(headerText).toHaveTextContent('Header text changed')
    })
})
```

This test can then be run with: 

### `npm test`
## Available Scripts (documentation from create-react-app)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
