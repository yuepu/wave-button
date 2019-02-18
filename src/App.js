import React, { Component } from 'react';
import './App.css';
import Button from './button';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button value="按钮123123123" onClick={this.z.bind(this)}></Button>
        <Button value=""></Button>
      </div>
    );
  }
  z(e){
    console.log('外面的函数');
  }
}

export default App;
