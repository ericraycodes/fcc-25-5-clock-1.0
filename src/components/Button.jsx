

/** Buttons child component
    * @prop String  : #id for the <button/>.
    * @prop String  : inner text for the <button/>.
    * @prop function: callback function run when either of the <button/>s was clicked.
    * 
    * Tasks:
    *   1. Attach mouse-click-event-listener to the buttons.
    *   2. Run callback when events are fired, passing in the <button/>'s #id as data.
    * 
    * @role : collect and pass user-mouse input to parent component.
    */
export default function Button() {


  return (
    <>
      <button id={ 'button-id '}>{ 'button' }</button>
    </>
  );
}
