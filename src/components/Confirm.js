import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import {List} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import { ListItem } from 'material-ui';

export class FormuserDetails extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep()
    }
    render() {
        const {values:{firstName,lastName,email,phone_no,occupation,interest,address,bio}}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm"/>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Phone No."
                            secondaryText={phone_no}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Interest"
                            secondaryText={interest}
                        />
                        <ListItem
                            primaryText="Occupatio"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio}
                        />
                        <ListItem
                            primaryText="Address"
                            secondaryText={address}
                        />
                    </List>
                    <br/>
                    <RaisedButton 
                       label="Confrim & Continue"
                       primary={true}
                       style={styles.button}
                       onClick={this.continue}
                    />
                     <RaisedButton 
                       label="Back"
                       primary={false}
                       style={styles.button}
                       onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles={
    button:{
        margin:15
    }
}

export default FormuserDetails
