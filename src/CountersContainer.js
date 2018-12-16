import React from 'react'
import { connect } from 'react-redux'
import CounterComponent from './CounterComponent'
import { startStopAction } from './actions'

//--noncontainer to go inside container

const CountersComponent = ({counters, toggleRunning})=>{
  return (
    <div>
      {counters.map((counter)=>(<CounterComponent key={counter.id} {...{...counter, toggleRunning:toggleRunning}} />))}
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

/*
const CheckboxComponent = ({checkboxChanged, checkboxChecked})=>(
  <div>
    {checkboxChecked?<span>__checked</span>:<span>unchecked</span>}
      <input type="checkbox" onChange={checkboxChanged} checked={checkboxChecked} />
    </div>
)
//--container--
function mapStateToProps(state) {
  return {
        checkboxChecked: state.checkboxChecked
    }
}
const mapDispatchToProps = dispatch => ({
  checkboxChanged: (e) => dispatch(checkboxChanged(e.target.checked))
})
*/