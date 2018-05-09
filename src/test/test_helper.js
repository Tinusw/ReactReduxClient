import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import enzymeToJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

global.enzymeToJson = enzymeToJson;

global.shallow = shallow;
global.render = render;
global.mount = mount;

import reactElementToJSXString from "react-element-to-jsx-string";

export { reactElementToJSXString };
