import React, {Component as navabarCom}  from "react";
class Navbar extends navabarCom {
  //state = {  }
  // stateless functional component
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-dark">{this.props.totalCounters}</span>
        </a>
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
