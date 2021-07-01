import React from 'react'
import Course from './Course'
import '../App.scss'
import intro from '../icons/intro_cert-1.png';
import frontend from '../icons/frontend_cert-1.png';
import react from '../icons/react_cert-1.png';


function Education(props) {
    return (
        <div className="Education">
            <Course
                cert={intro}
                title={'Introduction to Programming'}
                bullets={['HTML', 'CSS', 'Python', 'Javascript']}
                link={'https://www.udacity.com/course/intro-to-programming-nanodegree--nd000'}
            />
            <Course
                cert={frontend}
                title={'Front End Developer'}
                bullets={['CSS, Website Layout, Website Components', 'Javascript & The DOM', 'Web APIs and Asynchronous', 'Build Tools and Single Page Web Apps']}
                link={'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011'}
            />
            <Course
                cert={react}
                title={'React'}
                bullets={['Rendering UI with React', 'State Management', 'Lifecycle Events', 'React Router','React & Redux', 'React Native']}
                link={'https://www.udacity.com/course/react-nanodegree--nd019'}
            />
        </div>
    )
}

export default Education;