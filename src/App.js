import React, { Component } from 'react';
import NewsFeed from './components/NewsFeed';


class App extends Component {
  render() {
    return (

      <div className = "App">
      <h1>Hacker news Reader</h1>

      <NewsFeed/>
    </div>
    );
  }
}

export default App;
