import React, {Component} from 'react'

export default class Paragraph extends Component {
    constructor(props) {
        super(props);
        this.state={
            text:'ovo je text paragrapha',
            color:'',
            bgColor: ''
        }
    }
    render() {
        return(
            <div>{this.state.text}</div>
        )
    }
}