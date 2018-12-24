import React from 'react'

 const CounterComponent= ({counterId, label, count, period, periodCount, running, 
                           incrPeriod, decrPeriod, toggleRunning})=>(
  <div>
    <h2>{label} : {count}</h2>
    Running: 
    <input type="checkbox" onChange={()=>{toggleRunning(counterId)}} checked={running} /><br />
    Period: {period} [{periodCount}]<br /> 
    <button onClick={()=>{decrPeriod(counterId)}}> faster </button> 
    <button onClick={()=>{incrPeriod(counterId)}}> slower </button>
   </div>
)

 export default CounterComponent
