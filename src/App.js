import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {

// constructor(props) {
//     console.log(props);
//   super(props);
//   this.state = {
//        counters: [
//             { id: 1, value: 0 },
//             { id: 2, value: 9 },
//             { id: 3, value: 3 },
//             { id: 4, value: 1 },
//         ]
//   };
// }
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 9 },
            { id: 3, value: 3 },
            { id: 4, value: 1 },
        ],
        raj: 'puducherry'
    };
    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters }); 
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters: counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters: counters });
    };
    render() {
        return (
            <React.Fragment>
                <Navbar title={this.props.title}
                    totalCounters={this.state.counters.filter((c) => c.value > 0).length}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        raj={this.state.raj}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
