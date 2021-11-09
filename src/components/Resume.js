import React, { Fragment } from 'react';
import resume from '../images/resume.png'

export const Resume = () => {
    return (
        <Fragment>
            <div className="resume">
                <div className="upper">
                    <a href={resume} target="_blank" rel="noreferrer" className="download">Download My Resume Here</a>
                    <h2>
                        Skills
                    </h2>
                </div>
                <div className="lower">
                    <h3>
                        Front End
                    </h3>
                    <ul className="li">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>JQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div>
                    <h3>
                        Back End
                    </h3>
                    <ul className="li">
                        <li>APIs</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                
            </div>
        </Fragment>
    )
}
