import React from 'react'
import { connect } from 'react-redux'
import CounterComponent from './CounterComponent'
import { startStopAction } from './actions'

//--noncontainer to go inside container
/*
const CountersComponent = ({counters, toggleRunning})=>{
  return (
    <div>
      {counters.map((counter)=>{
        return <CounterComponent 
                    key={counter.counterId.toString()} 
                    counterd={counter.counterId}
                    label={counter.label}
                    count={counter.count}
                    running={counter.running}
                    toggleRunning={toggleRunning} 
                />
      })}
    </div>
  )
} */

const CountersComponent = ({counters, toggleRunning})=>{
  return (
    <div>
      {counters.map((counter)=>{
        return <CounterComponent 
                    key={counter.counterId} 
                    toggleRunning={toggleRunning} 
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
  toggleRunning: (id)=>{dispatch(startStopAction(id))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountersComponent)
