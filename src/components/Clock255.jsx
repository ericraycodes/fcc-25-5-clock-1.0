



/** Parent Component
   * 
   */
export default function Clock255() {


  return (
    <>
    <main className="clock255">

      <section id="timer-label">
        <label for="time-left">Session</label>
        <div id="time-left">25:00</div>
        <button id="start_stop">PLAY / PAUSE</button>
        <button id="reset">RESET</button>
      </section>

      <section id="session-label">
        <label for="session-length">Session Length</label>
        <div id="session-length">25</div>
        <button id="session-decrement">-</button>
        <button id="session-increment">+</button>
      </section>

      <section id="break-label">
        <label for="break-length">Break Length</label>
        <div id="break-length">5</div>
        <button id="break-decrement">-</button>
        <button id="break-increment">+</button>
      </section>

    </main>
    </>
  );
}
