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
            />
            <Course
                cert={frontend}
                title={'Front End Developer'}
                bullets={['CSS, Website Layout, Website Components', 'Javascript & The DOM', 'Web APIs and Asynchronous', 'Build Tools and Single Page Web Apps']}
            />
            <Course
                cert={react}
                title={'React'}
                bullets={['Rendering UI with React', 'State Management', 'Lifecycle Events', 'React Router','React & Redux', 'React Native']}
            />
        </div>
    )
}

export default Education;