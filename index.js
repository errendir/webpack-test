import * as ReactDOM from 'react-dom'
import * as React from 'react'

console.log("Hello")

const loadA = () => {
  return import(/* webpackChunkName: a */ "./a")
}

const loadB = () => {
  return import(/* webpackChunkName: b */ "./b")
}

ReactDOM.render(
  React.createElement(
    React.Fragment,
    null,
    React.createElement("button", {
      onClick: () => loadA()
    }, "When you click this button module A will be loaded"),
    React.createElement("button", {
      onClick: () => loadB()
    }, "When you click this button module B will be loaded"),
  ),
  document.querySelector("#root")
)