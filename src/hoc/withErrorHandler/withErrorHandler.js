import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/aux";

const withErrorHandler = (WrappedConponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    errorConfirmHandler = () => {
      this.setState({ error: null });
    };

    render() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use(null, error => {
        this.setState({ error: error });
      });
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
