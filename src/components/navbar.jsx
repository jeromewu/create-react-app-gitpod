import React, { Component as navabarCom } from "react";
class Navbar extends navabarCom {
  //state = {  }
  // stateless functional component

  //   constructor(props) {
  //   super(props);
  // //   this.state = {
  // //        counters: [
  // //             { id: 1, value: 0 },
  // //             { id: 2, value: 9 },
  // //             { id: 3, value: 3 },
  // //             { id: 4, value: 1 },
  // //         ]
  // //   };
  // }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        {this.props.title}
        <span className="badge badge-dark">{this.props.totalCounters}</span>
      </nav>
    );
  }
}

export default Navbar;

// mounting Phase - cOMPOENNTDIDMOUNT
// 1. app constructor will be called
// 2. render will be called
// 3. mounted

// update phase - cOMPOENNTDIDUPDATE

//COMPONENTWILLMOUNT

// 1. COMPOENT REMOVED

// PROPS, RAISNG AND HANDLING EVENTS, LIFTING THE STATE, FUCNTIOANL COMPOENTS, LIFECYCLE HOOKS
