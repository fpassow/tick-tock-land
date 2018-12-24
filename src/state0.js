
const state0 = {
  nextCounterId: 1,
  newCounterLabel: 'Bob',
  counters: []
}

//counters is an array of objects like:
//{counterId:0, label:'Counter Alpha', count:0, running: true, period:1, periodCount:0}

//periodCount is incremented every "system clock" tick.
//When periodCount === period, we increment count and reset periodCount

export default state0