import React, { Component } from 'react';
import First from './fakenews.png'
import Second from './enews.jpg'
import Third from './tnews.png'

class Hero extends Component{
    render(){
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block" src={First} alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Today's Top Stories!</h3>
                            <p>...</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src={Second} alt="Second slide"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Entertainment News</h3>
                            <p>...</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src={Third} alt="Third slide"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Tech News</h3>
                            <p>...</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }

}

export default Hero