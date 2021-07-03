import React, { Component } from 'react';
import Header from "../Header/Header"
import Box from "../Box/Box"

class FrontPage extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Header>header</Header>
                <Box>box</Box>
            </React.Fragment>
            );
    }
}
 
export default FrontPage;