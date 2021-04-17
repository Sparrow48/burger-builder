import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Nasib Sarkar",
        address: {
          street: "A/5,El Road",
          city: "Dhaka",
          zipCode: "1209",
          country: "Bangladesh",
        },
        email: "Nasib@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then(Response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => this.setState({ loading: false }));
  };
  render() {
    let form = (
      <form>
        <Input
          inputtype='input'
          type='text'
          name='name'
          placeholder='Your Name'
        />
        <Input
          inputtype='input'
          type='email'
          name='email'
          placeholder='Your Mail'
        />
        <Input
          inputtype='input'
          type='text'
          name='street'
          placeholder='Your Street'
        />
        <Input
          inputtype='input'
          type='text'
          name='postal'
          placeholder='Your Postal Code'
        />
        <Button btnType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
