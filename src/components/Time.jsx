

/** Time child component
    * @prop String  : #id for the element that holds the time length/value.
    * @prop String  : inner text for <label/>.
    * @prop State   : the current value of the state representing time.
    * 
    * Task:
    *   1. assign props to jsx.
    * 
    * @role : display the current value of associated state.
    */
export default function Time({ id, label, length }) {

  return (
    <>
      <label htmlFor={ id } className="label">{ label }</label>
      <div id={ id } className="length">{ length }</div>
    </>
  );
}
