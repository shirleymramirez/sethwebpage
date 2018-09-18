import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "../Main/main";

class Navbar extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Seth Ramirez' Website" scroll>
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/school">School</Link>
              <Link to="/piano">Piano</Link>
              <Link to="/sports">Sports</Link>
            </Navigation>
          </Header>
          <Drawer title="Seth's Website">
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="school/">School</Link>
              <Link to="/piano">Piano</Link>
              <Link to="/sports">Sports</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Navbar;
