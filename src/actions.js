//Redux action creators

//It's a convention in this project to create action objects here, and nowhere else.
// Therefore, we don't need constants for the "type" strings, because each on appears
// in exactly two places, here and in the switch statement in rootReducer.js. And we 
// write both sections of code at the same time.

export function tick() {
	return {type: 'TICK'}
}

export function startStopAction(id) {
	return {type:'STARTSTOP', id:id}
}

export function addCounterAction() {
	return {type:'ADD_COUNTER'}
}

export function newCounterLabelAction(newCounterLabel) {
	return {type:'NEW_COUNTER_LABEL', newCounterLabel: newCounterLabel}
}

export function incrPeriodAction(counterId) {
	return {type:'ADJUST_PERIOD', counterId:counterId, adjustment: 1}
}

export function decrPeriodAction(counterId) {
	return {type:'ADJUST_PERIOD', counterId:counterId, adjustment: -1}
}

export function deleteCounterAction(counterId) {
	return {type:'DELETE_COUNTER', counterId: counterId}
}

export function resetCounterAction(counterId) {
	return {type:'RESET_COUNTER', counterId: counterId}
}