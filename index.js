Timer =  function(seconds) {
  remainingSeconds = seconds; 
	timerId = 0;
	timerObj = {
    getRemainingSeconds: function (){
      return remainingSeconds
    },

    getTimerId: function () {return timerId;},
    setTimerId: function (newTimerId) {timerId = newTimerId;},

    start: function(){
      timerId = setInterval(timerObj.secondTick, 1000);
      timerObj.startHandler();
    },

    stop: function(){
      remainingSeconds = 0;
      clearInterval(timerId);
      timerObj.stopHandler();
    },

    resume: function(){
      timerId = setInterval(timerObj.secondTick, 1000);
      timerObj.resumeHandler();
    },

    pause: function(){
      clearInterval(timerId);
      timerObj.pauseHandler();
    },

    secondTick: function () {	
      remainingSeconds =  remainingSeconds - 1;
      timerObj.tickHandler(); 
      if (remainingSeconds <= 0) {timerObj.stop();}
    },

    tickHandler: function(){},
    startHandler: function(){},
    stopHandler: function(){},
    pauseHandler: function(){},
    resumeHandler: function(){},
    on: function(eventName, handler){
      switch (eventName) {
        case 'tick':
          this.tickHandler = handler
          break;
        case 'start':
          this.startHandler = handler
          break;
        case 'stop':
          this.stopHandler = handler
          break;
        case 'pause':
          this.pauseHandler = handler
          break;
        case 'resume':
          this.resumeHandler = handler
          break;
      }
    }
  }
  return timerObj
}
module.exports = Timer