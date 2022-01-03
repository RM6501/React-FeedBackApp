import {motion, AnimatePresence} from 'framer-motion';
import FeedBackItem from "./FeedBackItem";
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedBackList() {

    const {feedback} = useContext(FeedbackContext);

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
                item={item}  />
                </motion.div>
                )
            })}
            </AnimatePresence>
        </div>
    )}
}

export default FeedBackList;
