import "./App.css";
import API from "./data.json";
import { ReactComponent as Logo } from "./logo.svg";
import axios from "axios~";
import React from "react";
import data from "./axios";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount(prevProps, prevState) {
    axios.get({API})
      .then(res => {
      const data = res.data;
      this.setState({ data });
      })
  }

  render() {    
    return (
          <div className="App">
            {this.state.data.map(data =>
              <div className="scoreboardBox" key={data.id}>
                  <Logo />
              </div>
            )}
          </div>
        );
    }
  }
