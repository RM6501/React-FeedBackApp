import Card from "./shared/Card";
import { PropTypes } from "prop-types";
import {AiTwotoneDelete} from "react-icons/ai";

function FeedBackItem({item, handleDelete}) {

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => handleDelete(item.id)}>
              <AiTwotoneDelete/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item :PropTypes.object.isRequired,
}

export default FeedBackItem;
