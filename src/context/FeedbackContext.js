import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
   const [feedback,setFeedback] = useState([{
    id: 1,
    rating: 8,
    text: "lorem ipsumUt non esse eiusmod quis dolor laborum id mollit officia cupidatat ad eiusmod do. Est quis voluptate elit et. Non dolor dolore deserunt ipsum irure nostrud deserunt. Voluptate ex ut reprehenderit proident duis tempor. Est minim deserunt tempor officia nisi adipisicing sunt sint proident ex et dolore."
},
{
    id: 2,
    rating: 5,
    text: "Adipisicing irure nisi aliqua veniam anim proident officia elit anim Lorem."
},
{
    id: 3,
    rating: 10,
    text: "lorem ipsumUt non esse eiusmod quis dolor laborum id mollit officia cupidatat ad eiusmod do. Est quis voluptate elit et. Non dolor dolore deserunt ipsum irure nostrud deserunt. Voluptate ex ut reprehenderit proident duis tempor. Est minim deserunt tempor officia nisi adipisicing sunt sint proident ex et dolore."
},])

const [feedbackEdit,setFeedbackEdit]=useState({
    item:{},
    edit:false,
})
// delete feedback
   const deleteFeedback = (id) => {
    if(window.confirm('Are you sure?'))
    {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }  
// Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback,...feedback]);
}
// Update Feedback
   const updateFeedback = (id,updItem) => {
       setFeedback(feedback.map((item)=>
         item.id==id ? {...item,...updItem} : item
         ))
   }

// set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true,
        })
    }
   
    return (
        <FeedbackContext.Provider 
        value={{
             feedback,//state that holds the array of feedback objects
             feedbackEdit, //actual state that holds item to be edited
             deleteFeedback,// function called when delete icon is pressed
             addFeedback,// function called add feedback form is submitted
             editFeedback,// function called when edit icon is pressed
             updateFeedback,//function called when and editFeedback is called & then form is submitted
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;