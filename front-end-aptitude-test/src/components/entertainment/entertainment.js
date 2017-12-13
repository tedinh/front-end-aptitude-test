import React, { Component } from 'react';
import './entertainment.css';

class Entertainment extends Component{
    constructor(){
        super();

        this.state = {
            eNews: [],
            
        }
    }

    async componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=81197c8554f541a7bcea09c6d2c62257')
        .then((result) => {
            return result.json();
        })
        .then(data => {
            let eNews = data.articles.map((entertainmentSources) => {
                console.log(entertainmentSources)
                return(
                    <div className="eThumbnail" key={entertainmentSources.id}>
                        <h1>{entertainmentSources.title}</h1>
                        <a href={entertainmentSources.url} target="_blank"><img src={entertainmentSources.urlToImage} className="eImg"/></a>
                        <h2>{entertainmentSources.description}</h2>
                        <h4>By: {entertainmentSources.author}</h4>
                    </div>
                )
            })
        this.setState({eNews: eNews})
        // console.log('state', this.state.news)
        })

   

    }

    render(){
        return(
            <div>
            <h1 className="eTitle">Entertainment News</h1>
                <div className="eBox">
                {this.state.eNews}
                </div>

            </div>
        )
    }
}

export default Entertainment