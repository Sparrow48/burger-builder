import React, { Component } from "react";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";

class Orders extends Component {
  state = {
    order: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const fetchedData = [];
        for (let key in res.data) {
          fetchedData.push({ ...res.data[key], id: key });
        }
        this.setSate({ loading: false, Orders: fetchedData });
      })
      .catch(err => {
        this.setSate({ loading: false });
      });
  }
  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
