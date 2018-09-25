import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent,
  ListItemAction,
  Checkbox
} from "react-mdl";

class School extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="science-homework">
          <List style={{ width: "300px" }}>
            <ListItem>
              <ListItemContent>Volcano</ListItemContent>
              <ListItemAction>
                <Checkbox defaultChecked />
              </ListItemAction>
            </ListItem>
          </List>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="math-homework">
          <List style={{ width: "300px" }}>
            <ListItem>
              <ListItemContent>Multiplication Table</ListItemContent>
              <ListItemAction>
                <Checkbox defaultChecked />
              </ListItemAction>
            </ListItem>
            <ListItem>
              <ListItemContent>Math Facts</ListItemContent>
              <ListItemAction>
                <Checkbox defaultChecked />
              </ListItemAction>
            </ListItem>
          </List>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="english-homework">
          <List style={{ width: "300px" }}>
            <ListItem>
              <ListItemContent>Spelling</ListItemContent>
              <ListItemAction>
                <Checkbox defaultChecked />
              </ListItemAction>
            </ListItem>
          </List>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="reading-homework">
          <List style={{ width: "300px" }}>
            <ListItem>
              <ListItemContent>30 mins of reading</ListItemContent>
              <ListItemAction>
                <Checkbox defaultChecked />
              </ListItemAction>
            </ListItem>
          </List>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="homework-grid">
          <h1>Homework</h1>
          <div className="category-tab">
            <Tabs
              activeTab={this.state.activeTab}
              onChange={tabId => this.setState({ activeTab: tabId })}
              ripple
            >
              <Tab>Science</Tab>
              <Tab>Math</Tab>
              <Tab>English</Tab>
              <Tab>Reading</Tab>
            </Tabs>

            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
          </div>
        </div>
        <div className="school-activity">
          <h1>Talks about his school activities</h1>
        </div>
      </div>
    );
  }
}

export default School;
