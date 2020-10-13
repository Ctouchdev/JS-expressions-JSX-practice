//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const name = "Cody";
const date = new Date();
const currentYear = date.getFullYear();
const currentDay = date.getDay();
console.log(date);

ReactDOM.render(
  <>
    <p>Created by: {name}</p>
    <p>Today is {currentDay}</p>
    <p>Copyschwads {currentYear}</p>
  </>,
  document.getElementById("root")
);
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
