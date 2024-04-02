

export default function Clock25Plus5() {


  return (
    <>
    <main>

      <section id="break-label">
        <figure>
          <figcaption>Break Length</figcaption>
          <span id="break-length">{ 5 }</span>
        </figure>
        <button id="break-decrement">-</button>
        <button id="break-increment">+</button>
      </section>

      <section id="session-label">
        <figure>
          <figcaption>Session Length</figcaption>
          <span id="session-length">{ 25 }</span>
        </figure>
        <button id="session-decrement">-</button>
        <button id="session-increment">+</button>
      </section>

      <section id="timer-label">
        <figure>
          <figcaption>Session</figcaption>
          <span id="time-left">{ '25:00' }</span>
        </figure>
        <button id="start_stop">play / pause</button>
        <button id="reset">reset</button>
      </section>

    </main>
    </>
  )
}
