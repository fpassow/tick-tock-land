import React from 'react'

 const CounterComponent= ({id, label, count, running, toggleRunning})=>(
  <div>
    <h2>{label}</h2>
    <input type="checkbox" onChange={()=>{toggleRunning(id)}} checked={running} />
    {count}
   </div>
)

 export default CounterComponent
