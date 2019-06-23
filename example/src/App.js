import React, { Component } from "react";

import AutoCompleteText from "react-here-autocomplete";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">
              HereMaps ReactJs AutoComplete!
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="col s12 m7">
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <AutoCompleteText
                    placeholder="Start Typing Places!"
                    appid="IDZ2j4o9IdjMZO42fKwO"
                    appcode="4TSWoPbt3OQLpfqwLA2IdA"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
