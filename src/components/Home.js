import React from 'react'
import developer from '../icons/developer.svg'
import Skills from './Skills'
import About from './About'

function Home(props) {
    return (
        <div className="Home">
            <h1 className="Name">Joscana Garcia</h1>
            <h2 className="Position">Front End Web Developer</h2>
            <img src={developer} />
            <Skills />
            <About />
        </div>
    )
}

export default Home;