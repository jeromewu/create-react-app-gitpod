import React, { useState } from "react"; // react hook feature

export const Person = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "rajmohan", age: 5 },
      { name: "s", age: 5 },
      { name: "r", age: 90 },
    ],
    otherState: "rajmohan",
  });
  return <div>rajmohan</div>;
};

export const PersonTest = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "rajmohan", age: 5 },
      { name: "s", age: 5 },
      { name: "r", age: 90 },
    ],
    otherState: "rajmohan",
  });
  return <div>rajmohan</div>;
};

//export default Person;

// state compoent
// stateless component

// radium for pseudo elelemnt
// styleRoot for media queries
// styled componenets
// css modules
// error boundary
