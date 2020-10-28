
import React, { Component } from 'react';

export default class MyHornedCreatures extends Component {
    render() {
        return (
            <div className='horned' style={{ background: this.props.color }}>
                <img src={this.props.image} alt={this.props.name} />
                <div>{this.props.caption}</div>
                <div>{this.props.name}</div>
                <h3>{this.props.keyword}</h3>

            </div>
        )
    }
}
