import React , { Component } from 'react';
import Counter from './counter'
class Counters extends Component{
    state = {
        counters : [
            {id: 1 , value: 4},
            {id: 2 , value:0},
            {id: 3 , value:0},
            {id: 4 , value:0}

        ]
    };
    handleDelete = (counterid) => {
        console.log("Delete event handled", counterid)
        const counters = this.state.counters.filter(c => c.id !== counterid)
        this.setState({counters : counters})
        //since both the key and values are same it can be reduced to this.setState({counters})
    }
    handleIncrement = (counter) => {
        console.log("plumbing working")
    }
    render(){
        return (
            <div>
               {this.state.counters.map(counter => <Counter key = {counter.id} counter = {counter} onDelete = {this.handleDelete} onIncrement ={this.handleIncrement}>
                  {/* <h1>headding {counter.key}</h1> {/* passing children */} 
                   </Counter>)}
               
            </div>

        )// attributes set for the above counter is passed to the component using a single js object called props
    }

}

export default Counters;