import React, { Component } from 'react'


export default class Title extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tittleText: 'Welcome Milan',
            color: true,
            bgColor: '',
            colors: ["red", "yellow", "green", "purple", "pink"],
        }
    }
    handleClick = () => {
        this.setState({
            bgColor: 'blue',

        })
    }
    changeBg() {
        const { colors } = this.state;
        const color = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = color;
    }
    render() {
        const { bgColor } = this.state;

        return (
            <div>
                <h3>{this.state.tittleText}</h3>
                <button onClick={this.handleClick}>Change bgText</button>
                <div>
                    <button onClick={() => this.changeBg()}>Change Background Color</button>
                </div>
                <div style={{ backgroundColor: bgColor }}>
                    <h1>Backgroundcolor change here</h1>
                </div>
            </div>
        )
    }
}

