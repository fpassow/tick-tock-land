import React from 'react'
import { connect } from 'react-redux'
import { addCounterAction, newCounterLabelAction, newCounterPeriodAction } from './actions'

//--noncontainer to go inside container

const AddCounterComponent = ({
  addCounter, 
  newCounterLabelChanged, 
  newCounterPeriodChanged, 
  newCounterLabel,
  newCounterPeriod})=>{
  return (
  	<div>
  	  Label: <input type="text" onChange={newCounterLabelChanged} value={newCounterLabel} /><br />
      Period: <input type="text" onChange={newCounterPeriodChanged} value={newCounterPeriod} /><br />
      <button onClick={addCounter}>New Counter</button>
    </div>
  )
}

//--container--

const mapStateToProps = state => ({
	newCounterLabel: state.newCounterLabel,
  newCounterPeriod: state.newCounterPeriod
})

const mapDispatchToProps = dispatch => ({
  addCounter: (label)=>{dispatch(addCounterAction(label))},
  newCounterLabelChanged: (e)=>{dispatch(newCounterLabelAction(e.target.value))},
  newCounterPeriodChanged: (e)=>{dispatch(newCounterPeriodAction(e.target.value))},
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCounterComponent)
