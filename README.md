

# THE APP CONCEPT


## User-events
- **mouse-click** on *button-controls*: 
  - increment
  - decrement
  - play/pause
  - reset


## Data
### state
1. **sessionTimeLength** *Number*: The time-duration for the *session countdown* in **minutes**; initially set to **25 minutes**.
1. **breakTimeLength** *Number*: The time-duration for the *break countdown* in **minutes**; initially set to **5 minutes**.
1. **timerCurrentTime** *Number*: The current-time-duration left for the *scheduled countdown* in **seconds**; initially set similar to the initial *sessionLength*, **25 * 60 seconds**.
1. **isTimerRunning** *Boolean*: The *true/false* condition of whether the *timer* subwidget is running a countdown.
1. **schedule** *String*: Indicates which time-duration between *'Session'* and *'Break'* the *timer* is running a countdown.
### ref
1. **countdownID** *Number*: Holds the special ID returned by the **setTimeout()** when used to deduct a second to the *current timerLength*.


## logic
### user-control
The users are allowed *control* through **buttons** on three clock subwidgets: *timer*, *session*, and *break*.
1. The **clicked** `<button/>` is identified by its unique *button-#id*.
1. The *button-#id* is passed to the receiving *component* to trigger a corresponding functionality.
### functionality
Functionalites are run according to the *button-control-#id*.
1. The *timer* subwidget button-controls triggers the **starting/resuming**, **pausing/stopping**, and **resetting** the *timer-countdown*.
1. The *session* and *break* subwidgets can only trigger respective **incrementing** and **decrementing** functionality when *timer* subwidget is *not running* a countdown. There is a *minimum* and *maximum* boundary to these functionalities.
1. When *timer* resets, the *timer*, *session* and *break* subwidgets are returned to its initial state when *timer* resets.
### timer-countdown
The timer always display time in **mm:ss** (*minutes:seconds*, `00:00`) format. The current-time of the countdown must hold between/through *plays*, *pauses*, and *renders*.
1. Runs the countdown in *schedule*: 'Session', and then 'Break'. The schedule is in that *alternate order* on *repeating cylce*, unless there is a reset.
1. When the countdown comes down to zero: a sound goes off for at least a second from the `<audio #beep/>`, and the countdown *schedule* changes.
1. The *time*-*lengths* under/for schedule can only be adjusted when countdown *pauses*.
1. The *timer*'s' **reset** returns the app to its initial state.


## Resource
### Beep
- [Clock Alarm](https://pixabay.com/sound-effects/clock-alarm-8761/) sound file
- pixabay [license](https://pixabay.com/service/license-summary/)
### Icons
[Fontawesome](https://fontawesome.com/)
1. Icon components
```
  #solid play
  <FontAwesomeIcon icon="fa-solid fa-play" />
  #circle play 
  <FontAwesomeIcon icon="fa-regular fa-circle-play" />

  #solid pause
  <FontAwesomeIcon icon="fa-solid fa-pause" />
  #circle pause
  <FontAwesomeIcon icon="fa-regular fa-circle-pause" />

  #solid clock rotate left
  <FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" />

  #solid square caret left
  <FontAwesomeIcon icon{ faCaretLeft } />

  #solid square caret right
  <FontAwesomeIcon icon={ faCaretRight } />
```
1. Add icon-components to react
```
  # First, installed the core package, to make the icons work
  npm i --save @fortawesome/fontawesome-svg-core

  # Second, installed the icon packages, for the selection of free icons:
  npm i --save @fortawesome/free-solid-svg-icons
  npm i --save @fortawesome/free-regular-svg-icons
  npm i --save @fortawesome/free-brands-svg-icons

  #Last, installed the Font Awesome react component:
  npm i --save @fortawesome/react-fontawesome@latest
```
1. Import to React.js
```
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
```