import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: 'party'
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const todosRef = rootRef.child('todos');
    todosRef.on('value', snap => {
      console.log(snap.val())
      this.setState({
        todos: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.todos}</h1>
      </div>
    );
  }
}

export default App;
