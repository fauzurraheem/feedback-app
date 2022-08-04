import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/feedbackContext';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const {addFeedback, feedbackEdit, updatedFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
            setDisabled(false)
        }
    }, [feedbackEdit])


    const handleTextChange = (e) => {
        if(text === ''){
            setDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setDisabled(true)
            setMessage('Text must be atleast 10 characters')
        } else{
            setDisabled(false)
            setMessage(null)
        }
       setText(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text: text,
                rating: rating,

                
            }
            if(feedbackEdit.edit === true){
                updatedFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback) 
            }
            

            setText('');
        }
    }



  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className='input-group'>
                <input onChange={handleTextChange} type='text' placeholder='write a review' value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm