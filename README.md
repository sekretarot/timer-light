# timer-light
Super lightweight js timer

# Installation
`npm i timer-light`

# Example
```javascript
const Timer = require('timer-light')
timer = Timer(10); #init in seconds

tickHandler = function(){console.log("TICK");}
startHandler = function(){console.log("START");}
stopHandler = function(){console.log("STOP");}
resumeHandler = function(){console.log("RESUME");}
pauseHandler = function(){console.log("PAUSE");}

timer.on("tick", tickHandler)
timer.on("start", startHandler)
timer.on("stop", stopHandler)
timer.on("resume", resumeHandler)
timer.on("pause", pauseHandler)

timer.start();
```
# Usage
Initialize

`timer = Timer(duration_in_seconds);`

Start

`timer.start()`

Stop the timer. Resets it to 0. 

`timer.stop()`

Pause

`timer.pause()`

Resume

`timer.resume()`

# Events

Tick

`timer.on("tick", tickHandler)`

Start

`timer.on("start", startHandler)`

Stop (called also when timer is finished)

`timer.on("stop", stopHandler)`

Resume

`timer.on("resume", resumeHandler)`

Pause

`timer.on("pause", pauseHandler)`
