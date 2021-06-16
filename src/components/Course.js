import React, { useState } from 'react';
import '../App.scss'

function Course(props) {
    const [show, setShow] = useState(false);

    function handleButtonClick() {
        console.log('Clicked!')
        setShow(!show)
    }

    return (
        <div className="Course-container">
            <h1>{props.title}</h1>
            <button type="button" class="button" onClick={handleButtonClick}>
                {show ? "Collapse" : "Expand" }
            </button>
            <ul className='course-bullets'>
                {props.bullets.map((bullet) => {
                    return <li>{bullet}</li>
                })}
            </ul>
            {show ? <img className='certificate' src={props.cert} /> : null}
        </div>
    )
}

export default Course;