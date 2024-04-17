import React from 'react'
import ReactDom from "react-dom"
import "./Backdrop.css"
export default function Backdrop({handleSidebar}) {
  return (
    ReactDom.createPortal(
        <div onClick={handleSidebar} className='backdrop'></div>,
        document.getElementById("backdrop")
    )
  )
}
