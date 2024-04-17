import React ,{useState}from 'react'
import Navigation from "./Navigation"

import Siderbar from "./Sidebar"
export default function MainHeader() {
   
  return (
    <div className='main-header'>
         <Siderbar/>
        <Navigation/>
    </div>
  )
}
