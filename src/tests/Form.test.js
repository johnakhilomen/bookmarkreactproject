import React from 'react';
import {shallow} from "enzyme";
import Form from '../Form';
import SetupEnzyme from "./SetupEnzyme";

SetupEnzyme.init();

const formWrapper = shallow(<Form></Form>);

test('renders div container', () => {
    let divContainer = formWrapper.find("[className='container']");
    expect(divContainer.length).toBe(1);
});

test('renders p tag', () => {
    let pTags = formWrapper.find("[data-test='p']");
    expect(pTags.length).toBe(2);
});