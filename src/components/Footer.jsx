

/** FOOTER COMPONENT (function)\
 *
 * Content:
 * 1. The name of the project web app.
 * 2. The purpose of the web app.
 * 3. Link to the github repository of the project.
 * 4. Year-date of the web app's hoisting.
 *
 * @return JSX : <footer/> element containing the above information
 */
const Footer = () => {

  // github repo project link
  const href = 'https://github.com/ericraycodes/fcc-jscalculator-2.0';

  return (
    <footer className='footer'>
      <h2>25 + 5 CLOCK</h2>
      <p>A freeCodeCamp certification project.</p>
      <p>By <a
              href={ href }
              target='_blank'
              className='link'
            >Eric Ray Saladar</a>. 2024.
      </p>
    </footer>
  );
};


// export
export default Footer;
