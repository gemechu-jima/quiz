import { useReducer } from "react"

const initialState={
    balance:0,
    loan:0,
    isActive:false
}
const reducer=(state, action)=>{
   switch(action.type){
        case "openAccount":return{...state, balance:500, isActive:true}
        case "deposit":return{...state, balance:state.balance+action.payload}
        case'withdraw':
        return{...state,
           balance:state.balance>=50
           ? state.balance-action.payload
           :state.balance}
        case'requestLoan':
        if(state.loan>0) return state;
        return{
          ...state,
           balance:state.balance+action.payload,
          loan:action.payload}
        case'payLoan':
        if(state.loan===0) return state;
        return{
          ...state, 
          balance:state.balance>1000
          ?state.balance-action.payload
          :state.balance,
           loan:state.loan-action.payload}
        case'closeAccount':
        if(state.loan || state.balance!==0) return state;
        return{initialState}
        // return{...state, isActive:state.balance===0? !state.isActive :state.isActive}
        default:
          return state;
    }
}
function BankStatement() {
  const [{balance, loan, isActive}, dispatch]=useReducer(reducer, initialState)
  return (
    <div className="bank-statement">
      <h2> Bank Statement list</h2>
       <h3>Balance: {balance}</h3>
       <h3>Loan: {loan}</h3>
      <button className=" btn" onClick={()=>dispatch({type:"openAccount"})} disabled={isActive}>Open Account</button>  
      <button className=" btn" onClick={()=>dispatch({type:"deposit", payload:500})} disabled={!isActive}>deposit 500</button>  
      <button className="btn" onClick={()=>dispatch({type:"withdraw", payload:50})} disabled={!isActive}>withdraw 50</button>  
      <button className="btn" onClick={()=>dispatch({type:"requestLoan",payload:5000})} disabled={!isActive}>Request Loan 5000</button>
      <button className="btn" onClick={()=>dispatch({type:"payLoan",payload:1000})} disabled={!isActive}>pay loan 1000</button> 
      <button className="btn" onClick={()=>dispatch({type:"closeAccount"})} disabled={!isActive}>Close Account</button>   
      </div>
  )
}

export default BankStatement;