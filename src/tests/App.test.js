import React from 'react';
import {shallow} from "enzyme";
import App from '../App';
import Form from '../Form';
import Header from '../Header';
import SetupEnzyme from "./SetupEnzyme";

SetupEnzyme.init();

const appWrapper = shallow(<App></App>);

test("renders Header component", ()=> {
  let headerComponent = appWrapper.find(Header);
  expect(headerComponent.length).toBe(1);
})

test('renders Form component', () => {
  //console.log(wrapper.debug());
  //Lets test that App component has at least 1 Form component
  let formComponent = appWrapper.find(Form);
  expect(formComponent.length).toBe(1);
});

test("headerText initial state is App", ()=> {
  const headerTextInitialState = appWrapper.state("headerText");
  expect(headerTextInitialState).toBe("App");
});

test("set headerText state when button is clicked", ()=> {
  const button = appWrapper.find("[className='myButton']");
  button.simulate("click");
  const changeHeaderText =  appWrapper.find(Header);
  expect(changeHeaderText.props().headerText).toBe("New Header Text");
})

test("Will validata state for correctness", ()=> {
  const appState = appWrapper.state();
  expect(typeof(appState.success)).toBe(typeof(true));
  expect(typeof(appState.aNumber)).toBe(typeof(0));
  expect(typeof(appState.aString)).toBe(typeof(""));
  expect(typeof(appState.anArray)).toBe(typeof([]));
  expect(typeof(appState.anObject)).toBe(typeof({}));
  //expect(typeof(successState)).toBe(typeof(true));
})