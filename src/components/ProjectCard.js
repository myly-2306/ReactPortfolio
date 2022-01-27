import React, { Fragment } from 'react'

export const ProjectCard = (props) => {
    return (
        <Fragment>
            <figure>
                <img className="apppic" src={props.projectImg} width="460px" height="371px" alt="project pictures"></img>
            </figure>
            <div className="appdesc">
                <h3 className="apph2">
                    {props.project}
                </h3>
                <p className="projectdesc">
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