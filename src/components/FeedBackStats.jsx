import PropTypes from 'prop-types';

function FeedBackStats({feedback}) {
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

FeedBackStats.propTypes ={
    feedback : PropTypes.array.isRequired,
}

export default FeedBackStats
