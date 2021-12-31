import {useState} from 'react';
import Header from "./components/Header";
import FeedBackData from "./data/FeedBackData"
import FeedBackList from "./components/FeedBackList";


function App(){
  const [feedback, setFeedback] = useState(FeedBackData);
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure?'))
    {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }  
  
  return (
        <>
        <Header></Header>
          <div className="container">
            <FeedBackList feedback={feedback} handleDelete = {deleteFeedback}/>
          </div>
        </>
        );

}

export default App;