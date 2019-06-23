import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

export default class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
      locationId: ""
    };
  }

  static propTypes = {
    placeholder: PropTypes.string,
    appid: PropTypes.string.isRequired,
    appcode: PropTypes.string.isRequired
  };

  onTextChanged = e => {
    const value = e.target.value;
    this.setState({ locationId: "", text: value });

    if (value.length > 0) {
      this.setState({ text: value });
      fetch(
        `http://autocomplete.geocoder.api.here.com/6.2/suggest.json?app_id=${
          this.props.appid
        }&app_code=${this.props.appcode}&query=${value}`
      )
        .then(response => response.json())
        .then(data => {
          var op = data.suggestions.map(o => ({
            label: o.label,
            locationId: o.locationId
          }));

          this.setState({ suggestions: op });
        })
        .catch(err => {
          console.log(err);
          this.setState({ suggestions: [] });
        });
    } else {
      this.setState({ suggestions: [] });
    }
  };

  renderSuggestions = () => {
    const { suggestions } = this.state;

    if (suggestions.length === 0) {
      return null;
    } else {
      return (
        <ul>
          {suggestions.map(item => {
            return (
              <li
                key={item.locationId}
                locationid={item.locationId}
                onClick={() => this.suggestionSelected(item)}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  suggestionSelected = item => {
    this.setState({
      text: item.label,
      locationId: item.locationId,
      suggestions: []
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div className={styles.AutoCompleteText} {...this.props}>
        <input
          type="text"
          value={text}
          onChange={this.onTextChanged}
          placeholder={this.props.placeholder}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}
