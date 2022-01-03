import {Link} from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';

function AboutIconLink() {
    return (
        <div>
            <div className='about-link'>
             <Link to='/about'>
               <FaQuestion size={30} />
             </Link>
             </div>
        </div>
    )
}

export default AboutIconLink;
