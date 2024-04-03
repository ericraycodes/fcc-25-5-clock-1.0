

// imports
import Button from './Button';
import Time from './Time';



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


  return (
    <>
    <main className="clock255">

      <section id="timer-label">
        <Time
          id="time-left"
          label="Session"
          duration={"25:00"}
        />
        <Button id="start_stop" text="PLAY / PAUSE"/>
        <Button id="reset"      text="RESET"/>
      </section>

      <section id="session-label">
        <Time
          id="session-length"
          label="Session Length"
          duration={25}
        />
        <Button id="session-decrement" text="-"/>
        <Button id="session-increment" text="+"/>
      </section>

      <section id="break-label">
        <Time
          id="break-length"
          label="Break Length"
          duration={5}
        />
        <Button id="break-decrement" text="-"/>
        <Button id="break-increment" text="+"/>
      </section>

    </main>
    </>
  );
}
