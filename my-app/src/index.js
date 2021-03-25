import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//Components
import Header from './components/header';
import NewsList from './components/news_list';
class App extends Component{
  state = {
    news:JSON
  }
  render(){
    return (
      <div>
        <Header/>
        <h3>
          The News item are:
        </h3>
        <NewsList news = {this.state.news}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.querySelector('#root'))