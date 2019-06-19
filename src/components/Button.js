import React, { Component } from 'react'



export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHref: true,
            color: true,
            btnText: 'Clikni ovde',
            bgColor: true,
            black: true,

        }
    }
    changeTxtColor = () => {
        console.log("Klikni")

        this.setState({
            color: !this.state.color
        })
    }
    changeBgColor = () => {
        this.setState({
            bgColor: !this.state.bgColor
        })
    }
    toggleChange = () => {
        console.log("clicked")
        this.setState({
           isHref: !this.state.isHref,
        });
    }
    handleInfo = () => {
        this.setState({
            isHref: !this.state.isHref
        })
    }

    render() {
        let btn_class = this.state.bgColor ? "blackButton" : "redButton";
 
        return (
            <div className="container">Button komponenta---
             <label>
                        <input type="checkbox"
                            checked={this.state.isHref}
                            onChange={this.toggleChange}
                        />
                        Check Me!
             </label> 
            <div>
                <button className={this.state.color ? "buttonTrue" : "buttonFalse"} onClick={this.changeTxtColor}>{this.state.btnText}</button>
                <button className={btn_class} onClick={this.changeBgColor} >Change background color</button>
                </div>
                <button type="button" onClick={this.handleInfo}>
                        toggle info
                    </button>
                {this.state.isHref ? <p>jijojojoijojojoij</p> : null}
            </div>


        )
    }
}
