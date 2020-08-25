import React from 'react';
import {shallow} from "enzyme";
import App from '../App';
import Form from '../Form';
import Header from '../Header';
import SetupEnzyme from "./SetupEnzyme";

SetupEnzyme.init();
const setup = (props={}, state=null)=>{
  const wrapper = shallow(<Header {...props}></Header>);
  if(state)
  {
    wrapper.setState(state);
  }
  return wrapper;
}
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
  const headerText = "New Header Text";
  const wrapper = setup(null, {headerText});
  const button = appWrapper.find("[className='myButton']");
  button.simulate("click");

  const changeHeaderText =  appWrapper.find(Header);
  expect(changeHeaderText.props().headerText).toBe("New Header Text");
})