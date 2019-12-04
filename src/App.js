import React from "react";
import axios from "axios";

import "./App.css";
import Card from "./components/Card";

class App extends React.Component {
  // create state
  state = {
    users: []
  };
  // axios call within the proper method

  componentDidMount() {
    axios
      .get("https://api.github.com/users/playtez/followers")
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1> hello</h1>
        <Card users={this.state.users} />
      </div>
    );
  }
}

export default App;
