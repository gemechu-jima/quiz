import { useContext, useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./utils/loader";
import Error from "./utils/Error";
import Auth from "./Auth/Signup"
import Main from "./components/Main";
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";
import NextQuestion from "./components/NextQuestion";
import Progress from "./components/Progress";
import FinishedQuiz from "./components/FinishedQuiz";
import Timer from "./components/Timer";
import {useGlobalContext} from "./useContext/GlobalContext"
const second = 30;
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  timeCounter: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFail":
      return { ...state, questions: action.payload, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        timeCounter: state.questions.length * second,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finishQuestion":
      return {
        ...state,
        status: "finished",
        highScore:
          state.highScore > state.points ? state.highScore : state.points,
      };
    case "reset":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "countTimer":
      return {
        ...state,
        timeCounter: state.timeCounter - 1,
        status: state.timeCounter === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Un know Data");
  }
};
function App() {
  const [
    { questions, status, index, answer, points, highScore, timeCounter },
    dispatch,
  ] = useReducer(reducer, initialState);
  const {selected, userName, token}=useContext(useGlobalContext)
  const maxPossible = questions && questions.length>0 ?
   questions?.reduce((prev, cur) => prev + cur.points, 0) : 0;
  

  const NumberQuestion = questions.length;
  useEffect(() => {
    fetch(`http://localhost:3000/quiz/${selected}`, 
    {method:"GET", 
    headers:{Authorization:"Bearer "+ token}
  })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "dataReceived", payload: data })
    })
      .catch((err) => {dispatch({ type: "dataFail", payload: err })});
  }, [selected, token]);
 
   if(!userName && !token){
    return <div className="app">
     <h2>Please Login first</h2>
     <Auth/> 
      </div>
   }
 
  return (
    <div className="app">
 
    <Main>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <>
          <StartScreen question={questions} dispatch={dispatch} />
        </>
      )}
      {status === "active" && (
        <>
          <Progress
            NumberQuestion={NumberQuestion}
            points={points}
            index={index}
            answer={answer}
            maxPossible={maxPossible}
          />
          <Question
            questions={questions[index]}
            answer={answer}
            dispatch={dispatch}
          />
          <NextQuestion
            dispatch={dispatch}
            answer={answer}
            NumberQuestion={NumberQuestion}
            index={index}
            selected={selected}
            points={points}
            maxPossible={maxPossible}
          />
          <Timer dispatch={dispatch} timeCounter={timeCounter} />
        </>
      )}
      {status === "finished" && (
        <FinishedQuiz
          points={points}
          maxPossible={maxPossible}
          highScore={highScore}
          dispatch={dispatch}
        />
      )}
    </Main>

    </div>
  );
}

export default App;
