# tick-tock-land

I built this to play with an application where Redux receives
"system clock" actions from setInterval(...). And where things
are also changed by Redux actions triggered by UI events.

It's a collection of "counters". 

Each counter is displayed with a label. And the first thing you
can do is create a counter with the label text from a text field.

You can create as many as you want.

Once you create a counter, you can stop or start it with its "Running" checkbox.

You can also change it's speed with its "Faster" and "Slower" buttons. These
adjust the counters "period" property, which is the number of system clock
ticks required for the counter to increment.

The system clock runs at
one tick per second.

And each counter also has a Reset button that sets the count back to zero and a
delete button which does pretty much what you'd expect.

Usage:
```
npm install
npm start
```

...then the magic of create-react-app will start a dev server and point your browser to http://localhost:3000
