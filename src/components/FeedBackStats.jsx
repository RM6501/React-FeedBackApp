import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedBackStats({}) {

    const {feedback} = useContext(FeedbackContext);

// Calculating Average Rating
let average = feedback.reduce((previous,current) => {
    return previous + current.rating;
},0)

average /= feedback.length;
//rounding average to one decimal place , barring .0
average = average.toFixed(1).replace(/[.,]0$/,'');

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Feedbacks</h4>
            <h4>Average Rating: {isNaN(average) ? 0 :average}</h4>
        </div>
    )
}


export default FeedBackStats
