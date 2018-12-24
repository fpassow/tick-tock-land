import React from 'react'
import { connect } from 'react-redux'
import { addCounterAction, newCounterLabelAction } from './actions'

//--noncontainer to go inside container

const AddCounterComponent = ({addCounter, newCounterLabelChanged, newCounterLabel})=>{
  return (
  	<div>
  	  <input type="text" onChange={newCounterLabelChanged} value={newCounterLabel} />
      <button onClick={addCounter}>New Counter</button>
    </div>
  )
}

//--container--

const mapStateToProps = state => ({
	newCounterLabel: state.newCounterLabel
})

const mapDispatchToProps = dispatch => ({
  addCounter: (label)=>{dispatch(addCounterAction(label))},
  newCounterLabelChanged: (e)=>{dispatch(newCounterLabelAction(e.target.value))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCounterComponent)
