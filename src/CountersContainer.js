import React from 'react'
import { connect } from 'react-redux'
import CounterComponent from './CounterComponent'
import { startStopAction } from './actions'

//--noncontainer to go inside container

const CountersComponent = ({counters})=>{
  return (
    <div>
      {counters.map((counter)=>(<CounterComponent key={counter.id} {...counter} />))}
    </div>
  )
}

//--container--

const mapStateToProps = state => ({
  counters: state.counters
})

const mapDispatchToProps = dispatch => ({
  startStop: (id)=>{dispatch(startStopAction(id))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountersComponent)
