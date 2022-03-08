import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Splash extends Component {
    render() {
        return (
            <div className='splash-screen' style={{height:'100%',paddingTop:'49vh'}}>
                <p style={{height:'100%',margin:0,textAlign:'center'}}>DrugRunner.App</p>
            </div>
        );
    }
}
