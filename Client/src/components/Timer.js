import { useEffect } from "react"


function Timer({dispatch, timeCounter}) {
    const mins=Math.floor(timeCounter/60);
    const sec=timeCounter%60;

    useEffect(()=>{
        const id=setInterval(()=>{
            dispatch({type:'countTimer'})
        }, 1000)
        return()=>clearInterval(id)
    }, [dispatch])
  return (
         <div className="timer">
         {mins<10 && '0'}{mins}:{sec<10 && '0'}{sec}
            </div>
  )
}

export default Timer;