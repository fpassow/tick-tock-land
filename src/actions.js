//Redux action creators

export function tick() {
	return {type: 'TICK'}
}

export function startStopAction(id) {
	return {type:'STARTSTOP', id:id}
}