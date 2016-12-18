import React, {PropTypes} from "react";
import TemperatureCard from "./TemperatureCard";
import HumidityCard from "./HumidityCard";

import fetch from "isomorphic-fetch";

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.PATH = 'http://192.168.1.108:8081/dht11';

    this.state = {
      values: {}
    };
  }

  componentDidMount() {
    this.getValues(this.PATH);
  }

  getValues(url) {
    fetch(url)
      .then(response => {
        if( response.status >= 400 ) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(values => {
        this.setState({
          values: values
        })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <TemperatureCard values={this.state.values}/>
          <HumidityCard values={this.state.values}/>
        </div>
      </div>
    );
  }
}

export default Content;
