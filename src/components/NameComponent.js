import React, {Component} from 'react';

export default class SubContent extends Component {
    render() {
        const {firstName, lastName, age} = this.props;
        return (
            <div>
             <div>{firstName}</div>
             <div>{lastName}</div>
             <div>{age}</div>
            </div>
        );
    }
}
