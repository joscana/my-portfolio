import React from 'react'
import '../App.scss'
import intro from '../icons/intro_cert-1.png';
import frontend from '../icons/frontend_cert-1.png';
import react from '../icons/react_cert-1.png';


function About(props) {
    return (
        <div className="About">
            <h1> About Joscana </h1>
            <p> Studying front-end web development.</p>
            <img className='certificate' src={intro} />
            <img className='certificate' src={frontend} />
            <img className='certificate' src={react} />
        </div>
    )
}

export default About;