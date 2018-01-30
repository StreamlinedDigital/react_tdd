// Jest is a test runner created by facebook and ships with create-react-app.
// Jest looks for tests in a __test__ directory or any file that has "test" in the filename.
// The test runner fires when you run "npm run test" (see package.json)

import React from 'react'

// Enzyme is a helper library form jest.
// It lets you do things like mock data for a test, recreate a dom event (i.e a click event)
// and it lets you render react components

// Shallow lets you render a react component, but only that component any child components the tag will just get
// rendered and nothing else.  Hence the work "Shallow"
import { shallow } from 'enzyme'

import App from './App'

// Shallow take in JSX (i.e a react component).  Here were are rendering the component with shallow
// so we can test it
const app = shallow(<App />)

// A unit test is one test that checks a very small piece of behaviour on the app for proper behaviour.

// Check to see if the app component renders correctly

// "It" is a Jest global function, needs two parameters:
// - a description of the test
// - a function to run the test

it('renders correctly', () => {
  // "expect", a Jest global function, allows us to check that parts of the rendered
  // app component meet certain conditions
  // "expect" takes one argument: The piece of code you want to test (i.e a component, a number, a function)
  // "expect" has a lot of different methods to test against, "toMatchSnapshot()" is one of those methods
  expect(app).toMatchSnapshot()
})
