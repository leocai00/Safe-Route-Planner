import React, { Component } from 'react';
import './style.css';

class Card extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card mb-5 left">
                    <div className="card-body">
                        <img className="pb-3" src={this.props.img} alt="real time" />
                        <div className="card-content">
                            <h2>{this.props.title}</h2>
                            <p>{this.props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;