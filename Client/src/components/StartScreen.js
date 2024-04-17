
import { useContext } from "react";
import { useGlobalContext } from "../useContext/GlobalContext";
function StartScreen({question, dispatch}) {
  const {changeSelectOption, selected}=useContext(useGlobalContext)
  const select=selected.toUpperCase()
  return (
    <div className="start">
        <h3>{question?.length} {select} {selected==="react" ?
        " question is default but you can select other"
         :" question is exist"}
         </h3>
        <h3>Selected of please Your Prefer Subject </h3>
         <form style={{margin:"1rem"}} className="form">
          <div>
            <select onChange={changeSelectOption}>
              <option value={"react"}>Choose ...</option>
              <option value={"react"}>React Js</option>
              <option value={"javascript"}>Javascript</option>
              <option value={"html"}>HTML</option>
            </select>
          </div>
         </form>
        <button className="btn btn-ui" onClick={()=>dispatch({type:'start'})}>Let's Start</button>
    </div>
  )
}

export default StartScreen;