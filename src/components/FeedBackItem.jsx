import Card from "./shared/Card";
import { PropTypes } from "prop-types";
import {FaTimesCircle,FaEdit} from "react-icons/fa";
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedBackItem({item}) {

    const {deleteFeedback,editFeedback} = useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => deleteFeedback(item.id)}>
              <FaTimesCircle color="#004146"/>
            </button>
            <button className="edit" onClick={() => editFeedback(item)}>
              <FaEdit color="#004146"/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item :PropTypes.object.isRequired,
}

export default FeedBackItem;
