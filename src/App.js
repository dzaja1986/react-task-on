import React, {Component} from 'react';
import './App.css';
import Title from './components/Title';
import Vezba from './components/Vezba'
import Button from './components/Button';
import Paragraph from './components/Paragraph'
import Todo from './components/Todo/Todo'
import Nav from './nav/nav'
import Mycomponents from './components/Mycomponents'
import { Route, BrowserRouter as Router } from 'react-router-dom'


export default class App extends Component {
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
      <Router>
        <div className="Nav">
          <Nav />
        </div>
        <div className="MainContent">
        <Route exact path="/components/vezba" component={Vezba} />
        <Route exact path="/components/mycomponents" component={Mycomponents} />
        <Route exact path="/components/todo" component={Todo} />
        </div>
        </Router>
           {/*<Title />
           <Button />
           <Paragraph />
        
    <div>
    <button onClick = {this.changeTitle} >Change Title</button>
           </div>*/}
    
    </div>
  );
}
}


