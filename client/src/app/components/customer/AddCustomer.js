import React, {Component} from "react";
import {connect} from "react-redux";
import {createCustomer} from "../../../redux/customer";

class AddCustomer extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      phone: "",
      email: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: ""
      },
      logIn: {
        username: "",
        password: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState(
      {[e.target.name]: e.target.value}
    )
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addCustomer(this.state);
  }
  render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.customer}
          onChange={this.handleChange}
          name="name"
          type="text"
          placehoder="Name"
        />
        <input
          value={this.state.customer}
          onChange={this.handleChange}
          name="phone"
          type="text"
          placehoder="Phone"
        />
        <input
          value={this.state.customer}
          onChange={this.handleChange}
          name="email"
          type="text"
          placehoder="Email"
        />
        <input
          value={this.state.customer}
          onChange={this.handleChange}
          name="street"
          type="text"
          placehoder="Street"
        />
        <input
          value={this.state.customer}
          onChange={this.handleChange}
          name="city"
          type="text"
          placehoder="City"
        />
        <input
          value={this.state.customer}
          onChange={this.handleChange}
          name="state"
          type="text"
          placehoder="State"
        />
        <input
          value={this.state.customer}
          onChange={this.handleChange}
          name="zip"
          type="text"
          placehoder="Zip Code"
        />
      </form>
    </div>
  )}
}

function mapStateToProps(state) {
  return {
    customer: state.customer
  }
}

export default connect(mapStateToProps, {createCustomer})(AddCustomer)
