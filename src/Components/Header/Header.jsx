import React, { Component } from 'react';
import Heading from "../Heading/Heading";
import Avatar from"../Avatar/Avatar";

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Heading></Heading>
                <Avatar></Avatar>
            </React.Fragment>

         );
    }
}
 
export default Header;