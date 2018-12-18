import state0 from './state0'

function rootReducer(state = state0, action) {
  switch (action.type) {
  	case 'TICK':
      return Object.assign(
      	{}, 
      	state, 
      	{counters: advanceCounters(state.counters)})
    case 'STARTSTOP':
        return Object.assign(
      	{}, 
      	state, 
      	{counters: toggleCounterById(state.counters, action.id)})
    case 'ADD_COUNTER':
        let nextId = state.nextId
        return Object.assign(
      	{}, 
      	state, 
      	{counters: state.counters.concat({id: nextId, 
      		                              label:state.newCounterLabel, 
      		                              count:0, 
      		                              running: true})
        },
      	{nextId:nextId+1})
    case 'NEW_COUNTER_LABEL':
      return Object.assign(
      	{}, 
      	state, 
      	{newCounterLabel: action.newCounterLabel})
    default:
      return state;
  }
}
//'', newCounterName}
function advanceCounters(counters) {
	//Map creates a new array. So we're not mutating the old one.
	return counters.map(advanceCounter)
}

function advanceCounter(counter) {
	return counter.running ? {...counter, count:counter.count+1} : counter
}

function toggleCounterById(counters, id){
	return counters.map((counter)=>{
		if (counter.id === id) {
			return {...counter, running: !counter.running}
		} else {
			return counter
		}
	})
}

export default rootReducer
