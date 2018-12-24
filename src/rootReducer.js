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
      		            running: false,
      		            period: 1,
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

export default rootReducer
