import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsList from './NewsList';
import JSON from '../db.json';

class Home extends Component{
    constructor(){
        super()
        this.state={
            news: JSON
        }
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <NewsList newsList={this.state.news}/>
                <Footer year="2021" month="july"/>
            </React.Fragment>
        )
    }
}


export default Home