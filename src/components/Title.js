import React, { Component } from 'react'
 

export default class Title extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tittleText: '',
            color:false,
            bgColor:''
        }
    }
    onChange(inputEntry) {
        if (inputEntry) {
          this.setState({inputValue: inputEntry, bgColor: '#FF0000'}) 
        } else {
          this.setState({inputValue: inputEntry, bgColor: ''}) 
        }
      }
    render() {
      const {bgColor} = this.state

        return(
            <div>
            <h3>Moj title element</h3>
            <input
          value={this.state.inputValue}
          onChange={(evt) => this.onChange(evt.target.value)}
         />
        <div style={{backgroundColor: bgColor}}>
                <h1>Backgroundcolor change here</h1>
            </div>
            </div>
        )
    }
}

