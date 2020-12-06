import React, {Component} from "react";
import Counter from "./counter";



class Counters extends Component {

    state = {
        counters: [
            { id: 1, value: 0},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0},
        ]
    }

    handleDelete = counterId =>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        const counter = this.state.counters
        this.setState({counter:counters})
        console.log ('Event handler called ',counterId)

    };

    handleIncrement = counter => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters:counters})
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters:counters})
    }
    // this is a map function
    handelReset = counter => {
        console.log (counter)
        let value = this.props.counters.value
        value = 0
        this.setState({value:  value})
    }


    handelResetAll = () =>{
        const counters = this.state.counters.map(r =>{
            r.value = 0
            return r
        })
        this.setState({counters})
    }
    render () {
        return(
            <div>
                  <button onClick={()=> this.handelResetAll}
                    className="btn btn-primary btn-sm m-2">ResetAll</button>
                { this.state.counters.map(counter =>
                    <Counter key={counter.id}
                             counter={counter}
                            onDelete={this.handleDelete}
                             onIncrement ={this.handleIncrement}
                             onDecrement ={this.handleDecrement}
                             onReset ={this.handelReset}
                    />
                   )}
            </div>
        );
    }

}

export default Counters;