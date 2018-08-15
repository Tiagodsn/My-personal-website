// @flow
import React from "react";
import ReactDOM from "react-dom";
import App from "./container";
import 'bootstrap';
import './assets/sass/style.sass';
import data from '../data.json';

const root = document.getElementById("root");

if(root) {
  ReactDOM.render(<App {...data} />, root);
}
