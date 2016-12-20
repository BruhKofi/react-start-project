import React, {Component} from 'react';

export default class SubContent extends Component {
    render() {
        const {title, subtitle} = this.props;
        return (
            <div>
             <div>{title}</div>
             <div>{subtitle}</div>
            </div>
        );
    }
}
