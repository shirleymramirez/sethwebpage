import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              // src="https://cdn0.iconfinder.com/data/icons/avatar-circle/248/Boy_man_male_kid_smile_happy_blue_Avatar_-512.png"
              src={require("../../images/seth.png")}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Third Grade Student</h1>
              <hr />
              <p>
                Consistent "A" student | enthusiastic and loves reading books |
                knows how to play piano | good at playing sports like baseball
                and soccer | enjoys watching youtube video games | loves dancing
                | favorite foods are cheese, meatballs with barbeque sauce
              </p>
              <div className="social-links">
                {/* Linkedln */}
                <a
                  href="https://www.linkedin.com/in/shirley-ramirez/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/shirleymramirez"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Portfolio */}
                <a
                  href="https://shirleymramirez.github.io/SMR_Portfolio/#/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fas fa-user-tie" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="https://www.youtube.com/channel/UCM19uKQqNIyiPQ_f5sHW4Ew?view_as=subscriber"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
