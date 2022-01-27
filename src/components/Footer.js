import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <h6>&copy; My Portfolio</h6>
                <div className="icons">
                    <SocialIcon url="https://www.linkedin.com" style={{height: 30, width: 30}}/>
                    {/* <SocialIcon url="https://instagram.com" style={{height: 30, width: 30}}/> */}
                    <SocialIcon url="https://github.com/myly-2306" style={{height: 30, width: 30}}/>
                    <SocialIcon url="https://www.facebook.com/mythuong.ly.33234/" style={{height: 30, width: 30}}/>
                </div>
            </footer>
        </Fragment>
    )
}
