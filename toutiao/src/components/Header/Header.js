import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "今日头条",
      color: true
    };
    this.style = {
      color: "white"
    };
    this.mail = this.mail.bind(this);
    // this.search = this.search.bind(this);
  }

  mail() {
    this.setState(prevState => ({
      color: !prevState.color
    }));
    console.log(this.state.color);
    if (this.state.color) {
      this.style = {
        color: "black"
      };
    } else {
      this.style = {
        color: "white"
      };
    }
  }
  // search() {}
  render() {
    return (
      <header>
        <span
          style={this.style}
          onClick={this.mail}
          className="el-icon-message"
        />
        <h3> {this.state.title} </h3>
        <span className="el-icon-search" />
      </header>
    );
  }
}
