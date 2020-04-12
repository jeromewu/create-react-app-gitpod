import React, { Component } from "react";
import Counter from "./counter"; // default export any name can be given

class Counters extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 1 },
//       { id: 2, value: 9 },
//       { id: 3, value: 3 },
//       { id: 4, value: 1 },
//     ],
//   };

  //    onIncrement = (counter) => {
  //     const counters = this.state.counters.filter((c) => c.id !== counterId);
  //     this.setState({ counters: counters });
  //   };
//   handleIncrement = (counter) => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };
//   handleDelete = (counterId) => {
//     const counters = this.state.counters.filter((c) => c.id !== counterId);
//     this.setState({ counters: counters });
//   };

//   handleReset = () => {
//     const counters = this.state.counters.map((c) => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters: counters });
//   };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter             
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
