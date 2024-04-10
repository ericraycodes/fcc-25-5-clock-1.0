

// imports
import { useState } from 'react';
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


  /** State
   * 1. countdown : timer, initial value of 25:00.
   * 2. sessionLength : session time length, initial value of 25.
   * 3. breakLength : break time length, initial value of 5.
   */
  // const [countdown, setCountdown] = useState(25);
  // const [sessionLength, setSessionLength] = useState(25);
  // const [breakLength, setBreakLength] = useState(5);
  const [clock, setClock] = useState({
    "isRunning" : false,
    "session"   : 25,
    "break"     : 5,
  });


  /** Callback functions
    * 1. receiveButtonInput : receive #id of the <button/> element when user clicks
    * 2. runTimerControls
    * 3. runSessionControls : update the state of session-length
    * 4. runBreakControls   : update the state of break-length
    */
  // collect input: <button#id>
  const handleInput = (buttonId) => {
    // console : button#id passed in
    window.console.log('\tbutton#id received:', buttonId);
    
    // funtionalites in response to button#id
    if (buttonId==='start_stop' || buttonId==='reset') runTimerControls(buttonId);
    else if (!clock["isRunning"]) {
      if (buttonId==='session-decrement' || buttonId==='session-increment') runSessionControls(buttonId);
      else if (buttonId==='break-decrement' || buttonId==='break-increment') runBreakControls(buttonId);
    }
  };
  // timer controls
  const runTimerControls = (buttonId) => {
    // count
    window.console.count('\tcountdown');
  };
  // setting session length
  const runSessionControls = (buttonId) => {
    // count
    window.console.count('\tsession-length');

    // store session length update
    let sessionLength = clock.session;

    // decrement
    if (buttonId==='session-decrement' && sessionLength>1) {
      // count
      window.console.count('\tsession-decrement');
      // decrement
      sessionLength--;
    }
    // increment
    else if (buttonId==='session-increment' && sessionLength<60) {
      // count
      window.console.count('\tsession-increment');
      // increment
      sessionLength++;
    }

    // update session in state
    setClock((prev) => {
      return {
        "isRunning" : prev.isRunning,
        "session"   : sessionLength,
        "break"     : prev.break,
      };
    });
  };
  // setting break length
  const runBreakControls = (buttonId) => {
    // count
    window.console.count('\tbreak-length');

    // store break length updated value
    let breakLength = clock.break;

    // decrement
    if (buttonId==='break-decrement' && clock.break>1) {
      // count
      window.console.count('\tbreak-decrement');
      // update
      breakLength--;
    }
    // increment
    else if (buttonId==='break-increment' && clock.break<60) {
      // count 
      window.console.count('\tbreak-increment');
      // update
      breakLength++;
    }

    // update state
    setClock((prev) => {
      return {
        "isRunning" : prev.isRunning,
        "session"   : prev.session,
        "break"     : breakLength,
      };
    });
  };


  /* Iterative render on sub-widgets
    * 1. Reference state values  to respective sub-widgets.
    * 2. Iterate render.
    */
  const subWidgetsRender = (function() {
    // assign state values to respective sub-widgets
    APP[0]["time"]["length"] = clock.timer;
    APP[1]["time"]["length"] = clock.session;
    APP[2]["time"]["length"] = clock.break;

    // iterate sub-widget render
    return APP.map(obj => {
      // console: check assigned state values
      // window.console.log(APP);
      return (
        <section id={ obj.id } className="subwidget" key={ obj.id }>
          <Time
            id={ obj.time.id }
            label={ obj.time.label }
            length={ obj.time.length }
          />
          <Button id={ obj.button1.id} text={ obj.button1.text } callback={ handleInput }/>
          <Button id={ obj.button2.id} text={ obj.button2.text } callback={ handleInput }/>
        </section>
      );
    });
  }) ();


  return (
    <>
    <main className="clock255">
      { subWidgetsRender }
    </main>
    </>
  );
}
