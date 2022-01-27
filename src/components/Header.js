import React, { Fragment } from 'react'
import profilepic from '../images/IMG_7387.jpg'

export const Header = () => {
    return (
        <Fragment>
            <div className="around">
                <h3 className="name">My Ly</h3>
                <figure>
                    <img className="profileimage" src={profilepic}></img>
                </figure>
                <p className="bio">
                I'm currently a paraeducator working in a Kindergarten classroom for Federal Way Public School. 
                Working with children informs the patience and persistence in me. Seeing my students achieve 
                is the greatest success I long for. I passionate about guiding my students to the right path and showing 
                them success takes practice.
                </p>
                <p className="bio1">
                My hunger for knowledge and curiosity brought me to Full-stack Development. 
                I'm drawn to the digital world where I can see the impossible become possible. 
                Building websites and application exposes the playful and creative side of me, 
                gives me a chance to explore the digital world and challenge myself. Right now, I'm interested in an 
                internship for a company which takes the initiative in teachnology and has a nuturing environment
                so I can continue to grow. 
                </p>
            </div>
        </Fragment>
    )
}
