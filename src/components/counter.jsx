import React, { Component } from "react"; // NAMED EXPORT NEED TO EXPORT ONLY WITH THE GIVEN NAME
//import auxillary from "../hoc/auxillary";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2"],
  //   };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>there are no tags!</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  render() {
    //return <div>{this.renderTags()}</div>;
    return (
      <div>
        <span>{this.props.rajmohan}</span>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger"
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };
  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
