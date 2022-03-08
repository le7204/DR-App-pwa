import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Loading extends Component {
    render() {
        return (
            <div className='loadingd-screen' style={{height:'100%',paddingTop:'49vh'}}>
                <p style={{height:'100%',margin:0,textAlign:'center'}}>One Bullet Please</p>
            </div>
        );
    }
}
