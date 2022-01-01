import Card from "./shared/Card";
import { PropTypes } from "prop-types";
import {FaTimesCircle} from "react-icons/fa";

function FeedBackItem({item, handleDelete}) {

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => handleDelete(item.id)}>
              <FaTimesCircle/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item :PropTypes.object.isRequired,
}

export default FeedBackItem;
