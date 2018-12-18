//Redux action creators

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
