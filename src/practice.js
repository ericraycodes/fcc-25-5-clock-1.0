

/** Creating a countdown timer
 * 
 * This is a practice file.
 * This will build progressively.
 * A recursion?
 * 
 * @parameter Number : time length in minute/s.
 * 
 * 1. convert to seconds the minutes input.
 * 2. run countdown in 'mm:ss' format.
 * 
 * @return 
 * 
 */
function countdown(time) {

    if (time < 0) return 0;

    setTimeout(() => {
        // console
        console.log('counting down...', time);
        // recursive call
        countdown(time - 1);
    }, 1000);

}

countdown(10);