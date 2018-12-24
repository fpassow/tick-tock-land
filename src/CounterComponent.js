import React from 'react'

const h2Style = {
  marginBottom: "0px"
}

 const CounterComponent= ({counterId, label, count, period, periodCount, running, 
                           incrPeriod, decrPeriod, toggleRunning, deleteCounter, resetCounter})=>(
  <div>
    <h2 style={h2Style}>{label} : {count}</h2>
    Running: 
    <input type="checkbox" onChange={()=>{toggleRunning(counterId)}} checked={running} /><br />
    Period: {period} [{periodCount}]
    <button onClick={()=>{decrPeriod(counterId)}}> Faster </button> 
    <button onClick={()=>{incrPeriod(counterId)}}> Slower </button><br />
    <button onClick={()=>{resetCounter(counterId)}}> Reset </button>
    <button onClick={()=>{deleteCounter(counterId)}}> Delete </button>
   </div>
)

 export default CounterComponent
