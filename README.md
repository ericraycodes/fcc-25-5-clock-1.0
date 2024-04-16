# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





# The App Concept v1

## Resource
- *beep* - sound file
- pixabay [license](https://pixabay.com/service/license-summary/)

## User-events
- **mouse-click** on *buttons* as *controls*: 
  - increment
  - decrement
  - play/pause
  - reset

## Logic
The countdown / timer should be a separate task running parallel to synchronous code. Hence, it should run asynchronously. It important to note, that it can be controlled with associated controls.
1. Identify the `<button#id>` of user-click.
  - The **timer** *control-buttons* will run functionalities of the timer / countdown.
  - **session** and **break** *control-buttons* will run their respective functionalities.
1. Concurrent **timer / coundown** sub-widget:
  - The `start_stop` button#id will **run** or **pause** an *asynchronous* task of a countdown clock when *toggled*.
    - the first *time-length* will be of the *session* value; when session ends, the *break* *time-length* runs; *session* and *break* time-lengths will run alternately in that order.
  - The `reset` button#id will return the *clock* to its initial set.
1. The **session** and **break** sub-widget:
  - The `*-decrement` and `*-increment` will update the value of either *session* or *break* values in correspondense; these will run with a certain condition:
    - they will run the task when **timer** is not running,
    - decrements does not go below **1** minute,
    - increments does not go above **60** minutes
1. Everytime the **timer / countdown** goes down to **00 : 00** the `<audio#beep>` will sound off for at least a second.

  ### Timer-countdown Logic
  1. Controled by the timer-buttons: *start_stop* and *reset*.
  1. The countdown-length is intialized by the *sessionLength* and *breakLength* alternately.
  1. The countdown-length does not reset or change between plays and pauses.
  1. When countdown of *sessionLength* goes down to zero the *breakLength* alternates, when the latter finishes the cycle repeats unless there is a pause/reset.
  1. There is a sounding alarm of at least a second from `<audio #beep>` in between alternates.




## Data management
1. An **asynchronous function** will run a *countdown* of the *session-time* and *break-time*, respectively.
1. A **state** will hold the length of *session-time*.
1. A **state** will hold the length of *break-time*.
1. A **state** will hold the *Boolean* condition of the `<button #start_stop>` when toggled.


