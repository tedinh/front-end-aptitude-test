import React, { Component } from 'react';
import "./tech.css"

class Technology extends Component{
    constructor(){
        super();

        this.state = {
            techNews: [],
            
        }
    }

    async componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=81197c8554f541a7bcea09c6d2c62257')
        .then((result) => {
            return result.json();
            console.log(result)
        })
        .then(data => {
            console.log(data)
            let techNews = data.articles.map((techNewsSources) => {
                console.log(techNewsSources)
                return(
                    <div className="techThumbnail" key={techNewsSources.name}>
                        <h1>{techNewsSources.title}</h1>
                        <a href={techNewsSources.url} target="_blank"><img src={techNewsSources.urlToImage} className="techImg" /></a>
                        <h4>By: {techNewsSources.author}</h4>
                    </div>
                )
            })
        this.setState({techNews: techNews})
        console.log('state', this.state.techNews)
        })

   

    }

    render(){
        return(
            <div>
                <h1 className="techTitle">Tech News</h1>
                <div className="techBox">
                {this.state.techNews}
                </div>
            </div>
        )
    }
}

export default Technology