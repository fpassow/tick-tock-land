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
    default:
      return state;
  }
}

function advanceCounters(counters) {
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
