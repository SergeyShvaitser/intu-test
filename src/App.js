import React, { Component } from 'react';
import whyDidYouUpdate from "why-did-you-update";
import Stopwatch from 'views/containers/Stopwatch';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

class App extends Component {
    render() {
        return (
            <Stopwatch />
        );
    }
};

export default App;
