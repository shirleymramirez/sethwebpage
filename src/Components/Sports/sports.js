import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="sports-grid">
          {/* Legacy Fall Game 2017 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://media.graytvinc.com/images/810*455/soccer-generic_720.jpg) center/cover"
              }}
            >
              Legacy Fall Game 2017
            </CardTitle>
            <CardText>
              Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng
              pagpriprint.
            </CardText>
            <CardActions border>
              <Button colored>Schedule</Button>
              <Button colored>Practice</Button>
              <Button colored>Videos</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Legacy Winter Game 2017 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://media.graytvinc.com/images/810*455/soccer-generic_720.jpg) center/cover"
              }}
            >
              Legacy Winter Game 2017
            </CardTitle>
            <CardText>
              Ang Lorem Ipsum ang naging regular na modelo simula pa noong
              1500s.
            </CardText>
            <CardActions border>
              <Button colored>Schedule</Button>
              <Button colored>Practice</Button>
              <Button colored>Videos</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Summer Game 2018 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://media.graytvinc.com/images/810*455/soccer-generic_720.jpg) center/cover"
              }}
            >
              NYS Summer Game 2018
            </CardTitle>
            <CardText>
              First indoor soccer game. Lorem Ipsum is simply dummy text of the
              printing
            </CardText>
            <CardActions border>
              <Button colored>Schedule</Button>
              <Button colored>Practice</Button>
              <Button colored>Videos</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Legacy Fall Game 2018 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://media.graytvinc.com/images/810*455/soccer-generic_720.jpg) center/cover"
              }}
            >
              RSL-AZ Rec Fall Game 2018
            </CardTitle>
            <CardText>
              U-10 group. It is a long established fact that a reader will be
              distracted
            </CardText>
            <CardActions border>
              <Button colored>Schedule</Button>
              <Button colored>Practice</Button>
              <Button colored>Videos</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="sports-grid">
          {/* CYB Spring Game 2017 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://business-science-articles.com/images/baseball.jpg) center/cover"
              }}
            >
              CYB Spring Game 2018
            </CardTitle>
            <CardText>
              Nalagpasan nito hindi lang limang siglo, kundi nalagpasan din nito
              ang paglaganap ng electronic typesetting.
            </CardText>
            <CardActions border>
              <Button colored>Schedule</Button>
              <Button colored>Practice</Button>
              <Button colored>Videos</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* CNLL Fall Game 2018 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://business-science-articles.com/images/baseball.jpg) center/cover"
              }}
            >
              CNLL Fall Game 2018
            </CardTitle>
            <CardText>
              Nalagpasan nito hindi lang limang siglo, kundi nalagpasan din nito
              ang paglaganap ng electronic typesetting.
            </CardText>
            <CardActions border>
              <Button colored>Schedule</Button>
              <Button colored>Practice</Button>
              <Button colored>Videos</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Soccer</Tab>
          <Tab>Baseball</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Sports;
