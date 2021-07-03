import React, { Component } from 'react';
import NameOption from "../NameOption/NameOption"
import AvatarOption from "../AvatarOption/AvatarOption"
import PlayButton from "../PlayButton/PlayButton"


class Box extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NameOption></NameOption>
                <AvatarOption></AvatarOption>
                <PlayButton></PlayButton>
            </React.Fragment>
         );
    }
}
 
export default Box;