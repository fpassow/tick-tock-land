import React from 'react'
import { connect } from 'react-redux'
import CounterComponent from './CounterComponent'
import { startStopAction } from './actions'

//--noncontainer to go inside container

const CountersComponent = ({counters, toggleRunning})=>{
  return (
    <div>
      {counters.map((counter)=>{
        return <CounterComponent 
                    key={counter.id} 
                    id={counter.id}
                    label={counter.label}
                    count={counter.count}
                    running={counter.running}
                    toggleRunning={toggleRunning} 
                />
      })}
    </div>
  )
}

//--container--

const mapStateToProps = state => ({
  counters: state.counters
})

const mapDispatchToProps = dispatch => ({
  toggleRunning: (id)=>{dispatch(startStopAction(id))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountersComponent)
