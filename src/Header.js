import React, { Component } from 'react';

class Header extends Component {
    constructor(props)
    {
        super(props);
        console.log(props);
    }
    state = {  }
    render() { 
        const {headerText} = this.props;
        return ( 
            <div>
                 <h1 className="header">{headerText}</h1>
                <h1>Thanks for using my web app!</h1>
            </div>
         );
    }
}
 
export default Header;