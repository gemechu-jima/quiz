

function FinishedQuiz({points, maxPossible, highScore, dispatch}) {
  const percent=(points/maxPossible)*100;
    let emoji;
    if(percent===100)emoji="🎖🥇"
    else  if(percent>=85 && percent<=99) emoji="🥇"
    else  if(percent>=65 && percent<85) emoji="🥈"
    else  if(percent>=55 && percent<65) emoji="😄"
    else  if(percent>=45 && percent<=55) emoji="🧐"
    else  if(percent>=0 && percent<35) emoji="🙈"
  return (
    < >
        <p className="result"> <span>{emoji}</span>  Your Score is 
        <strong>{points}</strong> out of {maxPossible} ({Math.ceil(percent)}%)</p>
        <p className="highscore"> HighScore {highScore} point</p>
        <button className="btn btn-ui" onClick={()=>dispatch({type:'reset'})}>Restart Quiz</button>
    </>
  )
}

export default FinishedQuiz;