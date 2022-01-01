import {motion, AnimatePresence} from 'framer-motion';
import FeedBackItem from "./FeedBackItem";
import { PropTypes } from "prop-types";


function FeedBackList({feedback , handleDelete}) {
    if(!feedback || feedback.length === 0){
        return <p>No feed back yet.</p>
    }
    else{
    return (
        <div className = 'feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => {
                return(
                <motion.div
                key={item.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                final={{opacity:0}}
                >
                <FeedBackItem 
                key={item.id} 
                item={item} 
                handleDelete={handleDelete} />
                </motion.div>
                )
            })}
            </AnimatePresence>
        </div>
    )}
}

FeedBackList.propTypes = {
    feedback : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            text : PropTypes.string.isRequired,
            rating : PropTypes.number.isRequired,
        })
    )
}

export default FeedBackList
