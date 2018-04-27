import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";

import expect from "expect";

import reactElementToJSXString from "react-element-to-jsx-string";

export { shallow, expect, reactElementToJSXString };
