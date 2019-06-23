# react-here-autocomplete

> ReactJs Autocomplete input field for here maps geolocation

[![NPM](https://img.shields.io/npm/v/react-here-autocomplete.svg)](https://www.npmjs.com/package/react-here-autocomplete) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
npm install --save react-here-autocomplete
```

## Usage

```jsx
import React, { Component } from "react";

import AutoCompleteText from "react-here-autocomplete";

class Example extends Component {
  render() {
    return (
      <AutoCompleteText
        placeholder="Start Typing Places!"
        appid="YOUR_APP_ID"
        appcode="YOUR_APP_CODE"
      />
    );
  }
}
```

## License

MIT © [ahmedmandur](https://github.com/ahmedmandur)
