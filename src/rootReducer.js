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
      	    {counters: toggleCounterById(state.counters, action.id)}
      	)
    case 'ADJUST_PERIOD':
        return Object.assign(
      	    {}, 
      	    state, 
      	    {counters: adjustPeriodById(state.counters, action.counterId, action.adjustment)}
      	)
    case 'ADD_COUNTER':

    //USE state.newCounterPeriod, or default to 1 if its and empty string
        let nextCounterId = state.nextCounterId
        let nextState = Object.assign(
      	    {}, 
      	    state, 
      	    {
      	    	counters: state.counters.concat(
      	    	    {
      	    	    	counterId: nextCounterId, 
      		            label:state.newCounterLabel, 
      		            count:0, 
      		            running: true,
      		            period: Number.parseInt(state.newCounterPeriod, 10),
      		            periodCount: 0
      		        }
      		    )
            },
      	    {nextCounterId:nextCounterId+1}
      	)
      	return nextState
    case 'NEW_COUNTER_LABEL':
      return Object.assign(
      	{}, 
      	state, 
      	{newCounterLabel: action.newCounterLabel})
    case 'NEW_COUNTER_PERIOD':
      //Update the string state.newCounterPeriod if and only if
      // the new value can be parsed as an integer >= 1.
      //Also allow an empty string, so the user can clear the inital "1".
      let ncp = action.newCounterPeriod
      let ncpp = Number.parseInt(ncp, 10)
      if (ncp.length === 0 || ((ncpp >= 1) && (ncpp.toString() === ncp))) {
        return Object.assign(
          {}, 
          state, 
          {newCounterPeriod: action.newCounterPeriod})
      } else {
        return state
      }
    case 'DELETE_COUNTER':
        return Object.assign(
      	    {}, 
      	    state, 
      	    {counters: deleteCounterById(state.counters, action.counterId)}
      	)
        case 'RESET_COUNTER':
        return Object.assign(
            {}, 
            state, 
            {counters: resetCounterById(state.counters, action.counterId)}
        )
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
	if (!counter.running) {
		return counter
	} else {
		//periodCount counts up to period, 
		//  then we advance the count and reset periodCount
        let periodCount = counter.periodCount
        let count = counter.count
        periodCount = periodCount + 1
        if (periodCount >= counter.period) {
        	periodCount = 0
        	count = count + 1
        }
        return {...counter, count:count, periodCount:periodCount}
	}
}

function toggleCounterById(counters, id){
	return  counters.map((counter)=>{
		if (counter.counterId === id) {
			return {...counter, running: !counter.running}
		} else {
			return counter
		}
	})
}

function adjustPeriodById(counters, counterId, adjustment){
	return  counters.map((counter)=>{
		if (counter.counterId === counterId) {
			//Ignore attempt to set period to less than 1
			return {...counter, period: Math.max(1, counter.period + adjustment)}
		} else {
			return counter
		}
	})
}

function deleteCounterById(counters, counterId){
	return  counters.filter((counter)=>(counter.counterId !== counterId))
}

function resetCounterById(counters, counterId){
  return  counters.map((counter)=>{
    if (counter.counterId === counterId) {
      return {...counter, count: 0, periodCount: 0}
    } else {
      return counter
    }
  })
}

export default rootReducer
