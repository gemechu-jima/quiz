

function Progress({NumberQuestion, points, index, answer, maxPossible}) {

  return (
    <div className="progress ">
           <progress  max={NumberQuestion} value={index+Number(answer!==null)}></progress>
           <header className="app-header">
            <p>Question <strong>{index+1}</strong>/ {NumberQuestion} </p>
            <p><strong>{points}</strong>/{maxPossible} points</p>
           </header>
        </div>
  )
}

export default Progress;