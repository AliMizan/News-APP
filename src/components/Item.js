import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { title,    description, imageUrl,newsUrl,author,publishedAt } = this.props;
    return (
      <>
        <div style={{padding:"15px"}}>
          <div  className="card" >
            <img src={imageUrl} alt=""/>
            <div  className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {author} on {publishedAt}</small></p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
