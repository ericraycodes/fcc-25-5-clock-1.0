

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
export default function Button({ id, text }) {


  // reference button node
  const buttonRef = useRef(null);

  // attach mouse-click event-listerer
  useEffect(() => {
    buttonRef.current.addEventListener('click', handleClick);
    return () => {
      buttonRef.current.removeEventListener('click', handleClick);
    };
  });

  // handleClick
  const handleClick = (event) => {
    // console
    window.console.count('user-click');
    window.console.log(event, event.target.id);
  };


  // for class name and styling purposes
  const cn = /decrement|start/.test(id) ? 1 : 2;

  return (
    <>
      <button
        ref={ buttonRef }
        id={ id }
        className={ "button" + cn.toString()}
      >{ text }</button>
    </>
  );
}
