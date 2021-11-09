import React, { Fragment } from 'react'
import profilepic from '../images/profilephoto.png'

export const Header = () => {
    return (
        <Fragment>
            <div className="around">
                <h3 className="name">My Ly</h3>
                <figure>
                    <img className="profileimage" src={profilepic}></img>
                </figure>
                <p className="bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet metus ante,
                a auctor turpis sollicitudin id. Nullam felis nisl, suscipit et cursus lobortis,
                sollicitudin vestibulum dolor. Quisque tellus lectus, interdum in efficitur in,
                suscipit nec sapien.
                </p>
                <p className="bio1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet metus ante,
                a auctor turpis sollicitudin id. Nullam felis nisl, suscipit et cursus lobortis,
                sollicitudin vestibulum dolor. Quisque tellus lectus, interdum in efficitur in,
                suscipit nec sapien. Mauris in mauris pulvinar, scelerisque metus ut, consequat
                neque. Integer magna orci, porta et lacus eu, tincidunt tincidunt ante. Duis id
                neque velit. Donec commodo tellus ut arcu ullamcorper consectetur. Cras condimentum
                neque eget magna fermentum, quis luctus libero rutrum. Donec metus lectus, mattis id.
                </p>
            </div>
        </Fragment>
    )
}
