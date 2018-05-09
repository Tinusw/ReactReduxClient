import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { shallow, render, mount } from "enzyme";

global.shallow = shallow;
global.render = render;
global.mount = mount;

import reactElementToJSXString from "react-element-to-jsx-string";

export { reactElementToJSXString };
