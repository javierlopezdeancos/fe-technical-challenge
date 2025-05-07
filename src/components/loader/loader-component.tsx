import React from "react"
import './loader.css'

function LoaderComponent(): React.ReactElement {
  return (
    <div id="loader">
      <div id="top"></div>
      <div id="bottom"></div>
      <div id="line"></div>
    </div>
  )
}

export default LoaderComponent
