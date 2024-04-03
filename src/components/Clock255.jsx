

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
        <Time/>
        <Button/>
        <Button/>
      </section>

      <section id="session-label">
        <Time/>
        <Button/>
        <Button/>
      </section>

      <section id="break-label">
        <Time/>
        <Button/>
        <Button/>
      </section>

    </main>
    </>
  );
}
