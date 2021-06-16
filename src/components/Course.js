import React from 'react'
import '../App.scss'

function Course(props) {
    return (
        <div className="Course-container">
            <h1>{props.title}</h1>
            <ul className='course-bullets'>
                {props.bullets.map((bullet) => {
                    return <li>{bullet}</li>
                })}
            </ul>
            <img className='certificate' src={props.cert} />
        </div>
    )
}

export default Course;