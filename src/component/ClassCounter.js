import { className } from 'postcss-selector-parser';
import React, {Component} from 'react'
import '../App.css'

class ClassCounter extends Component {

    constructor() {
        super();
        this.state = {count: 0}
    }

    handleIncrease() {
        this.setState(
            {count: this.state.count + 1}
        );
    }

    handledecrease() {
        this.setState(
            {count: this.state.count - 1}
        );
    }

    render() {
        return (
            <div>
                <h1 className='count-display'>{this.state.count}</h1>
            <div>
                <button onClick={() => this.handledecrease()} className='count-button'>Decrease count</button>
                <button onClick={() => this.handleIncrease()} className='count-button'>Increase count</button>
            </div>

            </div>
        )
    }
}

export default ClassCounter;