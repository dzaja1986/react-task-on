import React, {Component} from 'react';
import Title from './Title';
import Button from './Button';
import Paragraph from './Paragraph'


export default class Mycomponents extends Component {
  constructor(props) {
    super();
    this.state = {
      showTitle: false,
      paragraphColor:''
    }
  }
  changeTitle = () => {
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
    <button onClick = {this.changeTitle} >Change Title</button>
    </div>
    
    </div>
  );
}
}


