import React, { Component } from "react";
import { connect } from "react-redux";

import Aux from "../Aux/aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  openSideDrawerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawe };
    });
  };

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          clicked={this.openSideDrawerHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          close={this.closeSideDrawerHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
