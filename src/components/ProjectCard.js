import React, { Fragment } from 'react'

export const ProjectCard = (props) => {
    return (
        <Fragment>
            <figure>
                <img className="apppic" src={props.projectImg} width="320px" height="271px" alt="placeholder"></img>
            </figure>
            <div className="appdesc">
                <h3 className="apph2">
                    {props.project}
                </h3>
                <p>
                    {props.desc}
                </p>
                <a href={props.deployedLink} target="_blank" rel="noreferrer" className="link">Deployed Link</a>
                <a href={props.github} target="_blank" rel="noreferrer" className="link"> Github Link</a>
            </div>
            
        </Fragment>
    )
}

// function ProjectCard (props) {

// });