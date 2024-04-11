

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
   * @state : timer initialvalue, timer current countdown value.
   * @state : session time-length value.
   * @state : break time-length value.
   * 
   * Tasks:
   *  1. Stores app state.
   *  2. Update / manage app state through user-input and functionality.
   *  3. Receives user-input-data to perform functionalities.
   */
export default function Clock255() {


  /** DATA
   * 
   * @State:
   * 1. isRunning : Boolean value, condition of the countdown - running or not
   * 2. session   : session time length in minutes, initial value of 25.
   * 3. break     : break time length in minutes, initial value of 5.
   * 
   * @Ref:
   * 1. countdownRef : The time-value of the countdown in seconds.
   *                    Initial value of session-time-length 25min. 
   *                    Immutable across re-renders.
   */


  /** EFFECTS
    * 
    * @Effect#1 : An asynchronous task of running the countdown
    * of the timer sub-widget.
    * a. Runs countdown when 'isRunning' is Boolean true.
    * b. Stops/pauses countdown when 'isRunning' is Boolean false.
    * c. Resets the countdown to its initial state when <button#reset> is pressed.
    * 
    * @Effect#2 : An asynchronous task of sounding <audio #beep>
    * everytime countdown reaches down to '00:00'.
    */




  /** CALLBACKS
    * 1. handleButtonId     : receive #id of the <button/> element when user clicks
    * 2. runTimerControls   : update the state of the countdown's 'isRunning' condition
    *                         in the timer sub-widget
    * 3. runSessionControls : update the state of session-length
    * 4. runBreakControls   : update the state of break-length
    */
  // collect the input-button#id, proceed to functionalities
  const handleButtonId = (buttonId) => {
    // console
    window.console.log('\tbutton#id:', buttonId);
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
          length={ 'state' }
        />
        <Button id={ 'session-decrement' } text={ '-' } callback={ handleButtonId }/>
        <Button id={ 'session-increment' } text={ '+' } callback={ handleButtonId }/>
      </section>
      <section id='break-label'>
        <Time
          id={ 'break-length' }
          label={ 'Break Length' }
          length={ 'state' }
        />
        <Button id={ 'break-decrement' } text={ '-' } callback={ handleButtonId }/>
        <Button id={ 'break-increment' } text={ '+' } callback={ handleButtonId }/>
      </section>
    </main>
    </>
  );
}
