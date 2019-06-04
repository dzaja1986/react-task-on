import React, {Component} from 'react';
import './App.css';
import Title from './components/Title';
import Vezba from './components/Vezba'
import Button from './components/Button';
import Paragraph from './components/Paragraph'

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      showTitle: false,
      paragraphColor:''
    }
  }
  changeTilte = () => {
    console.log("change title")
    this.setState({
      showTitle:true
    })
  }
  render() {
  return (
    <div className="App">
           <Title />
           <Button />
           <Paragraph />
           
    
    <div>
    <button onClick = {this.changeTilte} >Change Title</button>
    </div>
    </div>
  );
}
}


