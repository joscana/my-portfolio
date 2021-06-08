import React from 'react'
import js_icon from '../icons/javascript.svg'
import html5 from '../icons/html5.svg'
import css3 from '../icons/css-3.svg'
import sass from '../icons/sass.svg'
import git from '../icons/git.png'
import node from '../icons/node.svg'
import express from '../icons/express.svg'
import react from '../icons/react-js.svg'
import redux from '../icons/redux.svg'
import '../App.css'

function Skills(props) {
    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="Skills">
                <img className="icon" src={html5} />
                <img className="icon" src={css3} />
                <img className="icon" src={js_icon} />
                <img className="icon" src={sass} />
                <img className="icon" src={git} />
                <img className="icon" src={node} />
                <img className="icon" src={express} />
                <img className="icon" src={react} />
                <img className="icon" src={redux} />
            </div>
        </div>
    )
}

export default Skills;