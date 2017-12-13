import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render(){
        return(
            <div>
            <footer className="page-footer blue center-on-small-only footerSpace">

    <div className="container-fluid">
        <div className="row">

            <div className="col-md-12">
                <h3 className="footerText">Social Media</h3>
                <ul className="socialMedia">
                    <li><a href="www.facebook.com"><i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a></li>
                    <li><a href="www.github.com"><i class="fa fa-github-square fa-3x" aria-hidden="true"></i></a></li>
                    <li><a href="www.twitter.com"><i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a></li>
                    <li><a href="www.linkedin.com"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a></li>
                </ul>
            </div>

        </div>
    </div>

    <div className="footer-copyright">
        <div className="container-fluid">
            © 2017 Copyright: Terry's Fake News

        </div>
    </div>

</footer>
</div>
        )
    }
}

export default Footer