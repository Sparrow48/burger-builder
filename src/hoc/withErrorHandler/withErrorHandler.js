import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/aux";

const withErrorHandler = (WrappedConponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
      };

      // clear the error when sending a request
      axios.interceptors.request.use(req => {
        this.state = {
          error: null,
        };
        return req;
      });

      axios.interceptors.response.use(
        res => res,
        err => {
          this.state = {
            error: err,
          };
        }
      );
    }
    errorConfirmHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            cancelBackDrop={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedConponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
