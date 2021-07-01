import React from 'react'
import '../App.scss'
import gitHub from '../icons/gitHub-white.svg'
import gmail from '../icons/gmail.svg'
import linkedin from '../icons/linkedin.svg'




function Contact(props) {
    return (
        <div className="About">
            <h1> Contact Me </h1>
            <a href='https://github.com/joscana'>
                <img className='contact icon' src={gitHub} />
            </a>
            <a href='mailto:joscanag@gmail.com'>
                <img className='contact icon' src={gmail} />
            </a>
            <a href='https://www.linkedin.com/in/joscana-garcia-2871b5136/'>
                <img className='contact icon' src={linkedin} />
            </a>
        </div>
    )
}

export default Contact;