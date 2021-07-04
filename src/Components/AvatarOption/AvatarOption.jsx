import React, { Component } from 'react';
import "../AvatarOption/AvatarOption.css"

class AvatarOption extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="select-me">
                <div className="arrow left"></div>
                <img className="avatar-box" src="horse.gif" alt=""></img>
                <div className="arrow right"></div>
                {/* <img src="arrow.gif"></img> */}
            </div>
        )
    }
}
 
export default AvatarOption;