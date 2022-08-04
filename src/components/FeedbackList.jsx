// import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import Spinner from './shared/Spinner'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/feedbackContext'



function FeedbackList() {
    const {feedback, isloading} = useContext(FeedbackContext)
    
    if(!isloading && (!feedback || feedback.length === 0)){
        return <p>No feedback yet</p>
    }

    return isloading ? <Spinner /> : 
    (<div>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <FeedbackItem key={item.id} item={item}/>
        </motion.div>
        ))}
      </AnimatePresence>
    </div>)

    // return (
    //   <div>
    //     <AnimatePresence>
    //     {feedback.map((item) => (
    //       <motion.div
    //         key={item.id}
    //         initial={{opacity: 0}}
    //         animate={{opacity: 1}}
    //         exit={{opacity: 0}}
    //       >
    //         <FeedbackItem key={item.id} item={item}/>
    //       </motion.div>
    //       ))}
    //     </AnimatePresence>
    //   </div>
    // )





  // return (
  //   <div>
  //       {feedback.map((item) => (
  //           <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
  //       ))}
  //   </div>
  // )
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//      rating: PropTypes.number.isRequired 
//     })
//   )
// }

export default FeedbackList