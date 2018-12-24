import React from 'react'

 const CounterComponent= ({counterId, label, count, running, toggleRunning})=>(
  <div>
    <h2>{label}</h2>
    <input type="checkbox" onChange={()=>{toggleRunning(counterId)}} checked={running} />
    {count}
   </div>
)

 export default CounterComponent
