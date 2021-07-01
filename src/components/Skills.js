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
import '../App.scss'

function Skills(props) {
    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="Skills">
                <a href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'>
                    <img className="icon" src={html5} />
                </a>
                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
                    <img className="icon" src={css3} />
                </a>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
                    <img className="icon" src={js_icon} />
                </a>
                <a href='https://sass-lang.com/documentation'>
                    <img className="icon" src={sass} />
                </a>
                <a href='https://git-scm.com/doc'>
                    <img className="icon" src={git} />
                </a>
                <a href='https://nodejs.org/en/docs/'>
                    <img className="icon" src={node} />
                </a>
                <a href='https://expressjs.com/'>
                    <img className="icon" src={express} />
                </a>
                <a href='https://reactjs.org/docs/getting-started.html'>
                    <img className="icon" src={react} />
                </a>
                <a href='https://redux.js.org/'>
                    <img className="icon" src={redux} />
                </a>
            </div>
        </div>
    )
}

export default Skills;