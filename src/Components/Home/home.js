import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
  render() {
    return (
      <div styele={{ width: "100%", margin: "auto" }}>
        <Grid className="home-grid">
          <Cell col={12}></Cell>
        </Grid>
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default Home;
