import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
       super() 
    
       this.state={
           title:'React APP'
       }
       
    }
    render(){
        return(
            <React.Fragment>
                <header>
                    <p className="logo">{this.state.title}</p>
                    <center>
                        <input/>
                    </center>
                </header>
                <hr/>
            </React.Fragment>
        )
    }
}


export default Header;