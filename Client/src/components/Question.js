
import Option from "./Option"
function Question({ questions, answer, dispatch}) {
  return (
    <div className="">
        <h3>{questions?.question}</h3>
       <Option questions={questions} answer={answer} dispatch={dispatch}/>
    </div>
  )
}

export default Question;