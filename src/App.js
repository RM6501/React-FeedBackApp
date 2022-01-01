import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';
import Header from "./components/Header";
import FeedBackForm from './components/FeedBackForm';
import FeedBackData from "./data/FeedBackData"
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from './components/FeedBackStats';


function App(){
  const [feedback, setFeedback] = useState(FeedBackData);
  
  const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback,...feedback]);
  }
  
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure?'))
    {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }  
  
  return (
        <>
        <Header></Header>
        <FeedBackForm handleAdd = {addFeedback}/>
        <FeedBackStats feedback ={feedback}/>
          <div className="container">
            <FeedBackList feedback={feedback} handleDelete = {deleteFeedback}/>
          </div>
        </>
        );

}

export default App;