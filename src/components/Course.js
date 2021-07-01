import React, { useState } from 'react';
import '../App.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Course(props) {
    const [show, setShow] = useState(false);

    function handleButtonClick() {
        console.log('Clicked!')
        setShow(!show)
    }

    return (
        <div className="Course-container">
            <a href={props.link}>
                <h1>{props.title}</h1>
            </a>
            <ul className='course-bullets'>
                {props.bullets.map((bullet) => {
                    return <li>{bullet}</li>
                })}
            </ul>
            {show ? <ExpandLessIcon onClick={handleButtonClick} /> : <ExpandMoreIcon onClick={handleButtonClick} />}
            {show ? <img className='certificate' src={props.cert} /> : null}
        </div>
    )
}

export default Course;