import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values,handleChange}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success!"/>
                    <h1>Thank You for your Submission</h1>
                    <p>You will get further instructions by Email</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success;
