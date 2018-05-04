import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { shallow, render, mount } from "enzyme";

import expect from "expect";

import reactElementToJSXString from "react-element-to-jsx-string";

export { shallow, render, mount, expect, reactElementToJSXString };
