import React, { Component } from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {

    render() {
        return (
            <div className={this.props.open ? 'sidebar-open' : 'sidebar-closed'}>
                {this.props.open &&
                    <button onClick={this.props.arrowClick}> {'<--'} </button>
                }
                {!this.props.open &&
                    <button onClick={this.props.arrowClick}> {'-->'} </button>
                }
            </div>
        );
    }
}
