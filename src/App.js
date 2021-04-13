import React, { Component } from "react";
import classes from "./App.module.css";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div className={classes.App} style={{ overflow: "hidden" }}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
