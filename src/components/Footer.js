import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <h6>&copy; My Portfolio</h6>
                <div className="icons">
                    <SocialIcon url="https://www.linkedin.com" style={{height: 25, width: 25}}/>
                    <SocialIcon url="https://instagram.com" style={{height: 25, width: 25}}/>
                    <SocialIcon url="https://github.com" style={{height: 25, width: 25}}/>
                    <SocialIcon url="https://facebook.com" style={{height: 25, width: 25}}/>
                </div>
            </footer>
        </Fragment>
    )
}
