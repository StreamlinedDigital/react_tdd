// Jest is a test runner created by facebook and ships with create-react-app.
// Jest looks for tests in a __test__ directory or any file that has "test" in the filename.
// The test runner fires when you run "npm run test" (see package.json)

import React from 'react'

// Enzyme is a helper library from jest.
// It lets you do things like mock data for a test, recreate a dom event (i.e a click event)
// and it lets you render react components

// Shallow lets you render a react component, but only that component, any child components the tag (i.e <Tag />) will just get
// rendered and nothing else.  Hence the word "Shallow"
import { shallow } from 'enzyme'

import App from './App'

// Shallow take in JSX (i.e a react component).  Here were are rendering the component with shallow
// so we can test it
const app = shallow(<App />)

// A unit test is one test that checks a very small piece of behaviour on the app for proper behaviour.

// Describe is a good way to group like unit tests together and the output in the command line
// groups the tests together
describe('App', () => {
  // "It" is a Jest global function, needs two parameters:
  // - a description of the test
  // - a function to run the test

  // Checking to see if the app component renders correctly
  it('renders correctly', () => {
    // "expect", a Jest global function, allows us to check that parts of the rendered
    // app component meet certain conditions
    // "expect" takes one argument: The piece of code you want to test (i.e a component, a number, a function)
    // "expect" has a lot of different methods to test against, "toMatchSnapshot()" is one of those methods

    // toMatchShapshot() keeps a recorded history of your react component
    // every time a change is made in your app the snapshot will update and make sure previous snapshots match the new snapshot
    // This is good because there are times when a component changes and you are unaware which can cause errors

    expect(app).toMatchSnapshot()
  })

  it('initializes the `state` with an empty list of gifts', () => {
    // Exepct inside of <App /> for its state
    // to have a gifts property that is equal to an empty array
    expect(app.state().gifts).toEqual([])
  })

  describe('when clicking the `add-gift` button', () => {
    // beforeEach runs before each test will run
    beforeEach(() => {
      // Here we want to simulate a click event before each of the tests in this group runs
      app.find('.btn-add').simulate('click')
    })
    // afterEach runs after each individual test runs in this group
    afterEach(() => {
      // Here we are setting the state back to an empty array so that any previous tests that might have
      // changed the gift state will not affect any future tests
      app.setState({ gifts: [] })
    })
    it('adds a new gift to `state`', () => {
      // Enzyme has a find method to find a class/component/tag inside of the compoents it rendering
      // You are also able to simulate a click event with enzyme
      expect(app.state().gifts).toEqual([{ id: 1 }])
    })

    it('adds a new gift to the rendered list', () => {
      //after clicking the add button
      // we are expecting the gift list to have one child in it
      expect(app.find('.gift-list').children().length).toEqual(1)
    })
  })
})
