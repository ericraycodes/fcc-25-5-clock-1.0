

export default function Section({ section }) {


  return (
    <>
      <section id={ section.id }>
        <figure>
          <figcaption>{ section.label }</figcaption>
          <div id="time-left">{ '25:00' }</div>
        </figure>
        <button id="start_stop">{ section.button1 }</button>
        <button id="reset">{ section.button2 }</button>
      </section>
    </>
  );
}
