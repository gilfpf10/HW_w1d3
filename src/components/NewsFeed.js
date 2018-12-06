import React, { Component } from "react";
import { articles } from "../seeds";

class NewsFeed extends Component{
  constructor(){
    super();
    this.state  = {
      articles: articles

    };

  }

  render(){
    return this.state.articles.map((article, i) => {
      return (
        <div key ={i}>
        <h3>
        {" "}
        <a href= {article.url}>{article.title}</a>
        </h3>
        <p>{article.by}</p>
        </div>
      );

    });
  }
}
export default NewsFeed;
