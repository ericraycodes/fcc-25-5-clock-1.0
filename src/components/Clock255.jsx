

// imports
import Button from './Button';
import Time from './Time';




// App data
const APP = [
  // #timer-label
  {
    id      : 'timer-label',
    time    : { id : 'time-left', label : 'Session', length : null, },
    button1 : { id : 'start_stop', text : 'PLAY/PAUSE', },
    button2 : { id : 'reset', text : 'RESET', },
  },

  // #session-label
  {
    id      : 'session-label',
    time    : { id : 'session-length', label : 'Session Length', length : null, },
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


  // assign state values to respective sub-widgets, temporary values for now
  APP[0]["time"]["length"] = '25:00';
  APP[1]["time"]["length"] = 25;
  APP[2]["time"]["length"] = 5;
  // iterate sub-widget render
  const subWidgetsRender = APP.map(obj => {
    // console: check assigned state values
    window.console.log(APP);
    return (
      <section id={ obj.id } className="widget" key={ obj.id }>
        <Time
          id={ obj.time.id }
          label={ obj.time.label }
          length={ obj.time.length }
        />
        <Button id={ obj.button1.id} text={ obj.button1.text }/>
        <Button id={ obj.button2.id} text={ obj.button2.text }/>
      </section>
    );
  });

  return (
    <>
    <main className="clock255">
      { subWidgetsRender }
    </main>
    </>
  );
}
