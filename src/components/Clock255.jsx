

// imports
import { useState, useRef, useEffect } from 'react';
import Button from './Button';
import Time from './Time';
import mp3URL from '../assets/ambient-flute-notification-3-185275.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';


// App data
const APP = [
  // #timer-label
  {
    id      : 'timer-label',
    time    : { id : 'time-left', label : null, length  : null, },
    button1 : { id : 'start_stop', text : 'PLAY/PAUSE', },
    button2 : { id : 'reset', text : 'RESET', },
  },

  // #session-label
  {
    id      : 'session-label',
    time    : { id : 'session-length', label : 'Session Length', length  : null, },
    button1 : { id : 'session-decrement', text : '-', },
    button2 : { id : 'session-increment', text : '+', },
  },

  // #break-label
  {
    id      : 'break-label',
    time    : { id : 'break-length', label : 'Break Length', length  : null, },
    button1 : { id : 'break-decrement', text : '-', },
    button2 : { id : 'break-increment', text : '+', },
  },
];


/** Clock255 parent component
   *  1. Stores app state.
   *  2. Update / manage app state through user-input and functionality.
   *  3. Perform app functionalities according to user-input.
   */
export default function Clock255() {


  /** DATA
   * 
   * State:
   * @schedule      String  : The schedule between 'Session' and 'Break' that is subject
   *                          to countdown. An initial value of 'Session'.
   * @countdownTime Number  : The timer-countdown's time-left in seconds.
   * @isRunning     Boolean : The condition of the timer-countdown - running or not.
   * @sessionLength Number  : The session time length in minutes, initial value of 25.
   * @breakLength   Number  : The break time length in minutes, initial value of 5.
   * 
   * Ref:
   * @timeoutIDRef Number : The special ID of setTimeout(). Used for stopping the countdown.
   * @audioRef     String : The node refence to the <audio#beep> element.
   */
  // state
  const [schedule, setSchedule] = useState('Session');
  const [countdownTime, setCountdownTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  // ref
  const timeoutIDRef = useRef(null);
  const audioIDRef = useRef(null);
  const audioRef = useRef(null);
  // console: data
  window.console.log(schedule, isRunning, timeoutIDRef.current);


  /** EFFECTS
    * 
    * @Effect#1 timer-countdown : An asynchronous task of running the countdown
    * of the timer sub-widget.
    * a. Runs timer-countdown when 'isRunning' is Boolean true.
    * b. Stops/pauses timer-countdown when 'isRunning' is Boolean false.
    * 
    * @Effect#2 alarm : An asynchronous task of sounding <audio #beep>
    * everytime timer-countdown reaches down to '00:00'.
    */
  // effect 1: asynchronous timer-countdown
  useEffect(() => {
    /** countdown-logic
        * 1. The setTimeout runs when isRunning is true.
        * 2. The setTimeout stops when isRunning is false.
        * 3. The countdown-time-holder does not change between plays/pauses/renders.
        * 4. The timer runs the scheduled countdown: Session, and then Break;
        *    this cycle repeats in order, unless there is a reset.
        * 5. Sounds the <audio#beep> when schedule changes.
        */
    // when isRunning is true
    if (isRunning) {
      // countdown schedule
      if (countdownTime < 0) {
        // change timer length to the next schedule
        const nextTimerLength = schedule === 'Session' ? breakLength*60 : sessionLength*60;
        setCountdownTime(nextTimerLength);
        // update schedule
        setSchedule((state) => state === 'Session' ? 'Break' : 'Session');
      }
      // countdown
      else if (countdownTime >= 0) {
        // async 1-second-countdown
        timeoutIDRef.current = setTimeout(() => setCountdownTime(countdownTime - 1), 1000);
        // sound beep
        if (countdownTime === 0) {
          // count: #beep
          window.console.count('#beep sound...');
          // beep sound
          audioRef.current.play();
        }
      }
    }
    // when isRunning is false
    if (!isRunning) clearTimeout(timeoutIDRef.current);
  }, [isRunning, countdownTime]);


  /** CALLBACKS
    * @handleButtonId     : receive #id of the <button/> element when user clicks
    * @runTimerControls   : update the state of the timer-countdown's 'isRunning' condition
    *                       in the timer sub-widget
    * @runSessionControls : update the state of session-length
    * @runBreakControls   : update the state of break-length
    * @formatToMMSS       : convert seconds (Number) to mm:ss format (String)
    */
  // collect the input-button#id, proceed to functionalities
  const handleButtonId = (buttonId) => {
    // console
    window.console.log('\tbutton#id:', buttonId);

    // check button-controls origin
    const isOfTimerOrigin = buttonId==='start_stop' || buttonId==='reset';
    const isOfSessionOrigin = buttonId==='session-decrement' || buttonId==='session-increment';
    const isOfBreakOrigin = buttonId==='break-decrement' || buttonId==='break-increment';

    // when <button#id> is of the timer sub-widget
    if (isOfTimerOrigin) runTimerControls(buttonId);
    // when of other sub-widgets, check if timer is counting down
    else if (!isRunning) {
      // when <button#id> is of the session sub-widget
      if (isOfSessionOrigin) runSessionControls(buttonId);
      // when <button#id> is of the break sub-widget
      else if (isOfBreakOrigin) runBreakControls(buttonId);
    }
  };
  // update isRunning state, run reset functionality
  const runTimerControls = (buttonId) => {
    // count
    window.console.count('\ttimer-sub-widget');
    // update isRunning
    if (buttonId==='start_stop') {
      setIsRunning(!isRunning);
    }
    // reset clock
    else if (buttonId==='reset') {
      // reset state
      setSchedule('Session');
      setCountdownTime(25 * 60);
      setIsRunning(false);
      setSessionLength(25);
      setBreakLength(5);
      // stop countdown, stop #beep, rewind #beep
      clearTimeout(audioIDRef.current);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      // console
      window.console.log('reset');
    }
  };
  // update sessionLength state
  const runSessionControls = (buttonId) => {
    // count
    window.console.count('session-sub-widget');
    // state update holder
    let sessionLengthUpdate = sessionLength;
    // session length decrement
    if (buttonId==='session-decrement' && sessionLength>1) sessionLengthUpdate -=  1;
    // session length increment
    else if (buttonId==='session-increment' && sessionLength<60) sessionLengthUpdate += 1;
    // update state
    setSessionLength(sessionLengthUpdate);
    if (schedule === 'Session') setCountdownTime(sessionLengthUpdate * 60);
  };
  // update BreakLength state
  const runBreakControls = (buttonId) => {
    // count
    window.console.count('break-sub-widget');
    // state update holder
    let breakLengthUpdate = breakLength;
    // break decrement
    if (buttonId==='break-decrement' && breakLength>1) breakLengthUpdate -= 1;
    // break increment
    if (buttonId==='break-increment' && breakLength<60) breakLengthUpdate += 1;
    // update state
    setBreakLength(breakLengthUpdate);
    if (schedule === 'Break') setCountdownTime(breakLengthUpdate * 60);
  };
  // format to mm:ss
  const formatToMMSS = (seconds) => {
    // minutes
    let mm = Math.floor(seconds / 60);
    // seconds
    let ss = seconds % 60;
    // keep single digits to two digits - prepend a '0'
    mm = mm < 10 ? '0' + mm : mm;
    ss = ss < 10 ? '0' + ss : ss;
    // return String: mmss format
    return mm.toString() + ":" + ss.toString();
  };


  // mmss format of the countdown time left
  const mmss = formatToMMSS(countdownTime);
  // button#start_stop text
  const bttnPlayPause = isRunning ? 'PAUSE' : 'PLAY';
  // button icons
  // const decrementIcon = <FontAwesomeIcon icon={ faCaretLeft } />;
  const decrementIcon = '-';
  // const incrementIcon = <FontAwesomeIcon icon={ faCaretRight } />;
  const incrementIcon = '+';


  // RENDER JSX
  return (
    <>
    <main className="clock255">
      <section id={ 'timer-label' }>
        <Time
          id={ 'time-left' }
          label={ schedule }
          length={ mmss }
        />
        <Button id={ 'start_stop' } text={ bttnPlayPause } callback={ handleButtonId }/>
        <Button id={ 'reset' } text={ 'RESET' } callback={ handleButtonId }/>
      </section>
      <section id='session-label'>
        <Time
          id={ 'session-length' }
          label={ 'Session Length' }
          length={ sessionLength }
        />
        <Button id={ 'session-decrement' } text={ decrementIcon } callback={ handleButtonId }/>
        <Button id={ 'session-increment' } text={ incrementIcon } callback={ handleButtonId }/>
      </section>
      <section id='break-label'>
        <Time
          id={ 'break-length' }
          label={ 'Break Length' }
          length={ breakLength }
        />
        <Button id={ 'break-decrement' } text={ decrementIcon } callback={ handleButtonId }/>
        <Button id={ 'break-increment' } text={ incrementIcon } callback={ handleButtonId }/>
      </section>
      <audio
        id='beep'
        ref={ audioRef }
        src={ mp3URL }
        preload='auto'
      ></audio>
    </main>
    </>
  );
}
