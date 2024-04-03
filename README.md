# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





# The App v1

## Data information
- *Numeric values* : break length; session length; initial values of break and session; these values does not go below zero
- *Clock / Timer (MM:SS)* : countdown timer / clock until `00:00`; the initial value is defined by the break and session length values

## Data structure
- *Numbers* (Primitive) : break length, session length, initial values
- *Array* [mm, ss] : Clock / Timer (Custom)

## State
- *break length* : initial value of **5**.
- *session length* : initial value of **25**.
- *Clock / Timer* : initial value of **session length** - **[25, 00]**.

## Events / Peripheral
- **mouse-click** on *buttons* : increment, decrement, play/pause, reset

## Resource
- *beep* - sound file

## Logic
- Setting up *break length* and *session length* values.
  1. Initialized to 5 and 25, respectively.
  1. Can be incremented <= **60** and decremented >= **0**, when clock is not running.
- Playing, pausing, resetting the clock.
  - *play-toggle*: runs the clock
  - *pause-toggle*: pauses the clock
  - *reset-button*:
    - the clock is at stop
    - returns the app to its initial state
    - `<audio #beep/>` stops from sounding and resets to the beginning (when already playing).
  - when the clock reaches **00:00**, `<audio #beep/>` sound off at least a second.

