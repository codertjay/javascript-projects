import React, {Component} from "react";



class Counter extends Component{

    styles = {
        fontSize: 110,
        fontWeight: 'bold'
    };

    // this is a map function
    // handleIncrement1 = product => {
    //     console.log (product)
    //     // eslint-disable-next-line no-unused-expressions
    //     const value = this.props.counter.value
    //     this.setState({value: value +1})
    // }
    // // this is a map function
    // handleDecrement = product => {
    //     console.log (product)
    //     const value = this.props.counter.value
    //     this.setState({value: value -1 })
    // }
    // // this is a map function
    // handelReset = product => {
    //     console.log (product)
    //     let value = this.props.counter.value
    //     value = 0
    //     this.setState({value:  value})
    // }
    //

    // in here u should not that when we are using the onclick event we
    // are not calling the function instead we are using an anonymous function that
    // takes our function



    // note that this is not the main component this is used
    // in the Counters we imported it there
    // an we are using the props
    // we are looping over it with the counter we created
    //
    render() {
        return (
        <div>
            {/* so u can see that all this button is taking value and key
            which would be useful when we use this class in our counters */}
            <button onClick={ ()=>
                this.props.onReset({ id:this.props.counter.id})}
                    className="btn btn-warning">
                Reset
            </button>

            <span className={this.getBadgeClasses()}>
                {this.formatCount()}
            </span>
            <button onClick={ ()=>
                this.props.onIncrement(this.props.counter)}
                    className="btn btn-outline-primary mr-5">
                Increment
            </button>
            <button onClick={ ()=>
                this.props.onDecrement(this.props.counter)}
                    className="btn btn-outline-danger  mr-5">
                Decrement
            </button>
           <button onClick={() =>
               this.props.onDelete(this.props.counter)}
                   className="btn btn-danger  mr-5">
                Delete
            </button>

        </div>
        );
    }

    getBadgeClasses () {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary"
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? <h1>Zero</h1> : value;
    }


}


export default Counter;


// class Counter extends Component{
//     state = {
//         count: 6,
//         tags: ['tag1','tag2','tag3'],
//     };
//     styles = {
//         fontSize: 110,
//         fontWeight: 'bold'
//     };
//     renderTags(){
//         if (this.state.tags.length === 0) return  <p>There are not tags </p>;
//         return  <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
//     }
//     render() {
//
//         return (
//         <div>
//             {this.state.tags.length === 0 && 'please create a new tag'}
//             {this.renderTags()}
//         </div>
//         );
//     }
// }
