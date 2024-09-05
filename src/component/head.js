import React, { Component } from "react";
import news from "./news.png";

export default class Hell extends Component {
  componentDidMount() {
    this.updateBodyStyles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mode !== this.props.mode) {
      this.updateBodyStyles();
    }
  }

  updateBodyStyles = () => {
    document.body.style.backgroundColor =
      this.props.mode === "dark" ? "#343a40" : "#f8f9fa";
    document.body.style.color = this.props.mode === "dark" ? "white" : "black";
  };

  render() {
    return (
      <header>
        <h1
          className="text-center"
          style={{
            background:
              "linear-gradient(169deg, rgba(0,0,0,1) 0%, rgba(4,25,56,1) 46%, rgba(8,174,227,1) 98%)",
            color: this.props.mode === "dark" ? "white" : "black",
            padding: "10px",
          }}
        >
          <img src={news} alt="Newszzy" height={"100px"} width={"100px"} />
          <u>Newszzy</u>
        </h1>
      </header>
    );
  }
}
