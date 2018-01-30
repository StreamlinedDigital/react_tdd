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
