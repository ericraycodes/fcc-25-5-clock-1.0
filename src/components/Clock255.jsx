

// imports
import { useState, useRef, useEffect } from 'react';
import Button from './Button';
import Time from './Time';
// import




// App data
const APP = [
  // #timer-label
  {
    id      : 'timer-label',
    time    : { id : 'time-left', label : 'Session', length  : null, },
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
   * @ref : Holds the current timer-countdown value.
   * @state : The condition of timer-countdown (running or not).
   * @state : The session time-length value.
   * @state : The break time-length value.
   * 
   * Tasks:
   *  1. Stores app state.
   *  2. Update / manage app state through user-input and functionality.
   *  3. Perform app functionalities according to user-input.
   */
export default function Clock255() {


  /** DATA
   * 
   * State:
   * @isRunning Boolean     : condition of the timer-countdown - running or not
   * @sessionLength Number  : session time length in minutes, initial value of 25.
   * @breakLength Number    : break time length in minutes, initial value of 5.
   * 
   * Ref:
   * @cdRef Number : The time-value of the timer-countdown in seconds. 
   */
  // state
  const [isRunning, setIsRunning] = useState(false);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  // ref
  const cdRef = useRef(null);
  // console
  window.console.log('state:', isRunning, sessionLength, breakLength, 'ref:', cdRef.current);


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
  // useEffect(() => {
  //   // countdown runs only when isRunning is true
  //   while (isRunning) {
  //     [sessionLength, breakLength].forEach(min => {

  //     });
  //   }
  // });




  /** CALLBACKS
    * @handleButtonId     : receive #id of the <button/> element when user clicks
    * @runTimerControls   : update the state of the timer-countdown's 'isRunning' condition
    *                         in the timer sub-widget
    * @runSessionControls : update the state of session-length
    * @runBreakControls   : update the state of break-length
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
    // when of other sub-widgets, check if timer-countdown is running
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
      setIsRunning((prev) => { return !prev; });
    }
    // reset clock
    else if (buttonId==='reset') {
      setIsRunning(false);
      setSessionLength(25);
      setBreakLength(5);
      cdRef.current = 'reset';
    }
  };
  // update sessionLength state
  const runSessionControls = (buttonId) => {
    // count
    window.console.count('session-sub-widget');

    // session length decrement
    if (buttonId==='session-decrement' && sessionLength>1) {
      setSessionLength((prev) => { 
        return prev - 1; 
      });
    }
    // session length increment
    else if (buttonId==='session-increment' && sessionLength<60) {
      setSessionLength((prev) => { 
        return prev + 1; 
      });
    }
  };
  // update BreakLength state
  const runBreakControls = (buttonId) => {
    // count
    window.console.count('break-sub-widget');

    // break decrement
    if (buttonId==='break-decrement' && breakLength>1) {
      setBreakLength((prev) => {
        return prev - 1;
      });
    }
    // break increment
    if (buttonId==='break-increment' && breakLength<60) {
      setBreakLength((prev) => {
        return prev + 1;
      });
    }
  };


  return (
    <>
    <main className="clock255">
      <section id={ 'timer-label' }>
        <Time
          id={ 'time-left' }
          label={ 'Session / Break' }
          length={ '25:00' }
        />
        <Button id={ 'start_stop' } text={ 'PLAY/PAUSE' } callback={ handleButtonId }/>
        <Button id={ 'reset' } text={ 'RESET' } callback={ handleButtonId }/>
      </section>
      <section id='session-label'>
        <Time
          id={ 'session-length' }
          label={ 'Session Length' }
          length={ sessionLength }
        />
        <Button id={ 'session-decrement' } text={ '-' } callback={ handleButtonId }/>
        <Button id={ 'session-increment' } text={ '+' } callback={ handleButtonId }/>
      </section>
      <section id='break-label'>
        <Time
          id={ 'break-length' }
          label={ 'Break Length' }
          length={ breakLength }
        />
        <Button id={ 'break-decrement' } text={ '-' } callback={ handleButtonId }/>
        <Button id={ 'break-increment' } text={ '+' } callback={ handleButtonId }/>
      </section>
    </main>
    </>
  );
}
