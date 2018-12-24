import React from 'react'

 const CounterComponent= ({counterId, label, count, period, periodCount, running, 
                           incrPeriod, decrPeriod, toggleRunning, deleteCounter})=>(
  <div>
    <h2>{label} : {count}</h2>
    Running: 
    <input type="checkbox" onChange={()=>{toggleRunning(counterId)}} checked={running} /><br />
    Period: {period} [{periodCount}]
    <button onClick={()=>{decrPeriod(counterId)}}> faster </button> 
    <button onClick={()=>{incrPeriod(counterId)}}> slower </button><br />
    <button onClick={()=>{deleteCounter(counterId)}}> Delete </button>
   </div>
)

 export default CounterComponent
