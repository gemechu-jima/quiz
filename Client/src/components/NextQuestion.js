import { useContext } from "react";
import axios from "axios"
import { baseURL, baseURL1 } from "../helper/baseURL";
import { useGlobalContext } from "../useContext/GlobalContext";

function NextQuestion({dispatch, answer ,NumberQuestion, index, selected, points,maxPossible}) {
    const {user, token}=useContext(useGlobalContext)
   
    const handlePointSubmission=async(points, maxPossible)=>{
       const response= await axios.post(`${baseURL}/quiz/score`, 
       {points:(points/maxPossible)*100, email:user.email, course:selected},
       {
         headers:{Authorization:`Bearer ${token}`},
       })
       console.log(response.data)
    }
    if(answer===null) return;
 if(index<NumberQuestion-1)  return (
    <div>
        <button onClick={()=>dispatch({type:"nextQuestion"})} className="btn btn-ui">Next Question</button>
    </div>
   )
   if(index===NumberQuestion-1)  return (
    <div>
        <button onClick={()=>{
            handlePointSubmission(points, maxPossible)
            dispatch({type:"finishQuestion"})
            }} className="btn btn-ui">finish</button>
    </div>
   )
}

export default NextQuestion