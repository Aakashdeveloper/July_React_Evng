import React,{Component} from 'react';

class Header extends Component{
    constructor(){
       super() 

       this.state={
           title:'React First App'
       }
    }
    render(){
        return(
            <React.Fragment>
                <center>
                    <h2>{this.state.title}</h2>
                </center>
                <hr/>
            </React.Fragment>
        )
    }
}


export default Header;


/* functional
import React from 'react';

const Header = () => {
    return(
        <React.Fragment>
            <center>
                <h2>React App</h2>
            </center>
            <hr/>
        </React.Fragment>
    )
}

export default Header;



/////// Es5//////////
var React = require('react')

function Header(){
    return(
        <div>
            <center>
                <h2>React App</h2>
            </center>
            <hr/>
        </div>
    )
}

module.exports = Header;
*/