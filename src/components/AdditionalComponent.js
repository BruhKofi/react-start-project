import React, {Component} from 'react';

export default class AdditionalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingNumber: 0
        };
    }

    handleClick = () => {
        console.log(this)
        this.setState({
            startingNumber: this.state.startingNumber + 1
        })

    }
    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Add 1 to number</button>
                <hr/>
                {this.state.startingNumber}
            </div>
        )
    }


}
