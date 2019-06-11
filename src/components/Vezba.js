import React, { Component } from 'react';
import { Input } from 'reactstrap';


export default class Vezba extends Component {
  constructor(props) {
    super(props);
    this.state = {
     keywords: [],
     inputKeywords:''
    }

  }
  addKeywords = () => {
    console.log("addBtn");
    let keywordsArray = this.state.keywords.length < 1 ? [] : this.state.keywords;
    keywordsArray.push(this.state.inputKeywords);
    this.setState({
   keywords: keywordsArray,
   inputKeywords:''
      
    })
  }
  closeBtn = (i) => {
    console.log("Close BTN");
    this.setState({
     keywords: [...this.state.keywords.slice(0, i),...this.state.keywords.slice(i + 1)]
    })
   
  }
  cancelBtn = () => {
    this.setState({
      keywords:[],
      inputKeywords:''
    })
  }
 
  handleChangeInput = e => {
    console.log(e.target.value);
    this.setState({
      inputKeywords: e.target.value
    });
  }


  render() {
    const { inputKeywords } = this.state;


    const currentKeywords = this.state.keywords.map((keyword, i) => {
      return (<div key={i + 100000}><p>{keyword}</p>
      <button onClick={() => this.closeBtn(i)} className="RemoveBtn">X</button>
      <p>
      <span onClick={this.cancelBtn} className="cancelText">cancel</span>
      </p>
      </div>)

    })

    return (
      <div>Milan Miloradovic
      <Input
          onChange={this.handleChangeInput}
          value={inputKeywords}
          type="text"
          className="TD-input"
          placeholder="Write new keywords"
        />
        
        <button onClick={this.addKeywords} className="addBtn">+</button>
        <div class="col-9 text">
          {currentKeywords}
        </div>
      </div>
    );
  }
}


