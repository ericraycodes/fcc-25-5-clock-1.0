


// callback
const countdown = (sec) => {
    // display in mm:ss
    const mm = Math.floor(sec / 60);
    const ss = sec % 60;
    // console
    console.log('countdown', (mm < 10 ? '0' + mm : mm), ':', (ss < 10 ? '0' + ss : ss));

    // base condition
    if (sec === 0) return;

    // task
    setTimeout(() => {
        countdown(sec -= 1);
    }, 1000);
};

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
function runTimer(minute) {
    // console
    console.log('time in minutes:', minute);

    // convert minutes to seconds
    const seconds = minute * 60;

    // run countdown
    countdown(seconds);
}

runTimer(10);