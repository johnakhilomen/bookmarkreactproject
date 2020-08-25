import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Header from './Header';

class App extends Component {
  state = { 
    headerText : "App" 
   }
   clickButton = () => {
     console.log("Clicked!");
     console.log("Button clicked again");
     this.setState({
       headerText : "New Header Text"
     })
   }
  render() { 
    return ( 
      <div>
        <Header headerText={this.state.headerText}></Header>
        <Form></Form>
        <button className="myButton" onClick={this.clickButton} >Click me to change state</button>
      </div>
     );
  }
}
 
export default App;
