import React from 'react'
import { connect } from 'react-redux'
import CounterComponent from './CounterComponent'
import {startStopAction, incrPeriodAction, decrPeriodAction, deleteCounterAction, resetCounterAction} from './actions'

//--noncontainer to go inside container
const CountersComponent = ({counters, toggleRunning, incrPeriod, decrPeriod, deleteCounter, resetCounter})=>{
  return (
    <div>
      {counters.map((counter)=>{
        return <CounterComponent 
                    key={counter.counterId} 
                    toggleRunning={toggleRunning} 
                    incrPeriod={incrPeriod}
                    decrPeriod={decrPeriod}
                    deleteCounter={deleteCounter}
                    resetCounter={resetCounter}
                    {...counter} 
                />
      })}
    </div>
  )
}

//--container--

const mapStateToProps = state => {
  return {counters: state.counters}
}

const mapDispatchToProps = dispatch => ({
  toggleRunning: (id)=>{dispatch(startStopAction(id))},
  incrPeriod: (id)=>{dispatch(incrPeriodAction(id))},
  decrPeriod: (id)=>{dispatch(decrPeriodAction(id))},
  deleteCounter: (id)=>{dispatch(deleteCounterAction(id))},
  resetCounter: (id)=>{dispatch(resetCounterAction(id))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountersComponent)
