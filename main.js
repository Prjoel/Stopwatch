function Stopwatch(props) {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState(null);
  const [allowedToRun, setAllowedToRun] = React.useState(true);
  
  function startTimer() {
    let id;
    if(allowedToRun){
      setAllowedToRun(false)
      id = setInterval( () => {
        
        setSeconds(prevSeconds => {
          if(prevSeconds < 59 ) {
            return prevSeconds + 1
          } else {
            setMinutes(lastMinute => lastMinute + 1)
            return prevSeconds - 59;
          }
        })
      }, 1000);
      setIntervalId(id)
    }
  }
  function stopTimer() {
    clearInterval(intervalId);
    setAllowedToRun(true)
  }
  function restartTimer() {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
  }
  function formatTime(time) {
    if(time.toString().length === 1){
      return `0${time}`
    } else return time;
  }
  return (
    <div>
      <h1>
        {formatTime(minutes)}:{formatTime(seconds)}
      </h1>
      <button onClick={startTimer}>starrt</button>
      <button onClick={stopTimer} >stop</button>
      <button onClick={restartTimer}>restart</button>
    </div>
  );
}

ReactDOM.render(<Stopwatch />, document.querySelector("#root"));
