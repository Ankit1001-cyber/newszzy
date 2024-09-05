import React, { Component } from "react";
import news from "./news.png";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, mode } = this.props;
    return (
      <div
        className="my-3"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <div className="card">
          <img src={imageUrl || news} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
