import React, { Component } from 'react';
import Hero from './hero';
import './home.css'

class Home extends Component{
    constructor(){
        super();

        this.state = {
            news: [],
            
        }
    }

    async componentDidMount(){
        fetch('https://newsapi.org/v2/sources?language=en&apiKey=81197c8554f541a7bcea09c6d2c62257')
        .then((result) => {
            return result.json();
        })
        .then(data => {
            let news = data.sources.map((newsSources) => {
                console.log(newsSources)
                return(
                    <div className="tiles">
                    <div key={newsSources.name}>
                                <h1 className="newsName">{newsSources.name}</h1>
                                <a href={newsSources.url} target="_blank"><h2 className="newsName">{newsSources.description}</h2></a>
                    </div>
                    </div>
                )
            })
        this.setState({news: news})
        console.log('state', this.state.news)
        })

   

    }

    render(){
        return(
            <div>
            <h1 className="list-item title">All News</h1>
                <div className="container-fluid">
                    <div className="row box">
                        <div className="list-group">
                            <div className="list-item">
                                {this.state.news}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home