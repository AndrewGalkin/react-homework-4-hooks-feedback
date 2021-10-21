import React, {useState} from "react";
import classes from "./Feedback.module.scss"
import SelectButtons from "../SelectBtn/SelectButtons";
import Statistics from "../Statistic/Statistics";


const Feedback = () => {
  const [goodFeedback, setGoodFeedback] = useState(0)
  const [neutralFeedback, setNeutralFeedback] = useState(0)
  const [badFeedback, setBadFeedback] = useState(0)
  const [totalFeedback, setTotalFeedback] = useState(0)
  const [defaultFeedback, setDefaultFeedback] = useState(0)

  const goodIncrement = () => {
    setGoodFeedback(prevState => prevState + 1)
    setDefaultFeedback((goodFeedback + 1) * 100 / (totalFeedback + 1))
  }
  const badIncrement = () => {
    setBadFeedback(prevState => prevState + 1)
    setDefaultFeedback((goodFeedback) * 100 / (totalFeedback + 1))
  }
  const neutralIncrement = () => {
    setNeutralFeedback(prevState => prevState + 1)
    setDefaultFeedback((goodFeedback) * 100 / (totalFeedback + 1))
  }
  const totalIncrement = () => {
    setTotalFeedback(prevState => prevState + 1)
  }


  return (
    <div className={classes.all_content}>
      <h1>Please leave your feedback</h1>
      <div className={classes.buttons_content}>
        <SelectButtons goodIncrement={goodIncrement} badIncrement={badIncrement} neutralIncrement={neutralIncrement} total={totalIncrement}/>
      </div>
      {totalFeedback === 0 ? "NO MESSAGE" :
        (<Statistics good={goodFeedback} bad={badFeedback} neutral={neutralFeedback} total={totalFeedback} feedbacks={defaultFeedback}/>)}
    </div>
  )
}
export default Feedback
