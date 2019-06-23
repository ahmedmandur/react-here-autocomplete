import React, { Component } from "react";

import AutoCompleteText from "react-here-autocomplete";

export default class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", width: "100%" }}>
        <AutoCompleteText
          items={["Ahmed", "Amier", "Alaa"]}
          placeholder="Start Typing"
          style={{ width: 500 }}
          appid="IDZ2j4o9IdjMZO42fKwO"
          appcode="4TSWoPbt3OQLpfqwLA2IdA"
        />
      </div>
    );
  }
}
