import React, { Component } from 'react'
import FormuserDetails from './FormuserDetails';
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class Userform extends Component {
    state={
        step:1,
        firstName:"",
        lastName:"",
        email:"",
        phone_no:"",
        occupation:"",
        interest:"",
        address:"",
        bio:""  }
        //Move  for Next Step
        nextStep=()=>{
            const {step} = this.state;
            this.setState({
                step:step+1
            })
        }
        // Move back to Previous Step
        prevStep=()=>{
            const{step}=this.state;
            this.setState({
                step:step-1
            })
        }
        // Handle the field Change
        handleChange=input=>e=>{
            this.setState({[input]: e.target.value})
        }
       
    render() {
        const {step}=this.state;
        const {firstName,lastName,email,phone_no,occupation,interest,address,bio}=this.state;
        const values={firstName,lastName,email,phone_no,occupation,interest,address,bio}
        switch(step) {
            case 1:
                return (
                    <FormuserDetails 
                       nextStep={this.nextStep}
                       handleChange={this.handleChange}
                       values={values}
                    />
                )
           case 2:
               return (
                    <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />

                )
          case 3:
              return (
                  <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                  />
            )      

          case 4:
              return  <Success />
    }
    }}

export default Userform;
