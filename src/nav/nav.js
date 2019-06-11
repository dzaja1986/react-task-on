import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'



export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }
    
    
   render() {
       return(
           <div>
           <div className="Nav-Mobile-LogoContainer">
             <h2 className="Nav-Mobile-Logo">Milan Miloradovic</h2>
             <div className="Nav-LinkGroup">
          <NavLink className="NavLink Nav-Navlink" to="/components/vezba">Moja vezba</NavLink>
          <br />
          <NavLink className="NavLink Nav-Navlink" to="/components/mycomponents">Nemanjine vezbe</NavLink>
      </div>  
             <div>
     
      </div>
           </div>
           </div>
       )
   }
}