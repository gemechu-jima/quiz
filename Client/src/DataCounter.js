import { useState, useReducer } from "react";
const reducer=(state, action)=>{
    if(action.type==="dec"){
        return {...state, count:state.count-state.step}
    } else if(action.type==="inc"){
        return {...state, count:state.count+state.step}
    } else if(action.type==="define"){
        return {...state, count:action.payload}
    }else if(action.type==="reset"){
     return { count: state.count=0,
            step:state.step=1}
    }else if(action.type==="step"){
        return{...state, step:action.payload}
    } else{
        return ;
    }
}
function DateCounter() {


const [state, dispatch]=useReducer(reducer, {count:0, step:1})

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
 dispatch({ type:"dec"});
  };

  const inc = function () {
    dispatch({ type:"inc"})
  };

  const defineCount = function (e) {
    dispatch({ type:"define", payload:Number(e.target.value)})
    
  };

  const defineStep = function (e) {
    dispatch({
        type:"step",
        payload:Number(e.target.value)
    })
}

  const reset = function () {
    dispatch({
        type:'reset',
            })
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;