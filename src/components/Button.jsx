

// imports
import { useRef, useEffect } from 'react';




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
export default function Button({ id, text, callback }) {

  // reference button node
  const buttonRef = useRef(null);


  // attach mouse-click event-listerer
  useEffect(() => {
    buttonRef.current.addEventListener('click', handleClick);
    return () => {
      buttonRef.current.removeEventListener('click', handleClick);
    };
  });


  /** handleClick
    * 1. Captures the user-click event when fired.
    * 2. Pass in the activated <button> #id to the parent component.
    */
  const handleClick = (event) => {
    // console
    window.console.count('user-click');
    window.console.log(event, event.target.id);
    // callback
    callback(event.target.id);
  };


  // button class name distinction, for styling purposes
  const buttonCN = (/start|decrement/.test(id) ? 1 : 2).toString();


  return (
    <>
      <button
        ref={ buttonRef }
        id={ id }
        className={ "button" + buttonCN}
      >{ text }</button>
    </>
  );
}
