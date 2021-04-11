import React, { Component } from "react";

import Aux from "../../hoc/aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <Aux>
        <SideDrawer
          open={this.state.showSideDrawer}
          close={this.closeSideDrawerHandler}
        />
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
