import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsList from './NewsList';
import JSON from '../db.json';

class Home extends Component{
    constructor(){
        super()
        this.state={
            news: JSON,
            filtered:JSON
        }
    }

    /*var age =[54,23,15,67,34]
age.filter((data)=> { return data>30*/
    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return data.title.indexOf(keyword)>-1
        })
        this.setState({filtered:output})

    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <NewsList newsList={this.state.filtered}/>
                <Footer year="2021" month="july"/>
            </React.Fragment>
        )
    }
}


export default Home