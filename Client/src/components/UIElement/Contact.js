import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

import "./Contact.css"
export default function Contact() {
  return (
    <section>
      <div >
         <h1 style={{textAlign:"center"}}> Contact us</h1>
         <p>Complete the form to contact us</p>
      </div>
      <div className='form-info'>
        <div className='info'>
         <h2> Info</h2>
         <div> <FaPhone/> <p>0930851744</p></div>
          <div> <CgMail/> <p>gemeechujimacs@gmail.com</p></div>
           <div> <CiLocationOn/> <p>Addis Ababa , Ethiopia</p></div>
        </div>
        <form style={{width:"50%", height:"100%"}}>
          <div className='form-control'>
            <input type='text' name='name'placeholder='Enter Your Name'/>
            <input type='email' name='email'placeholder='Enter Your Email'/>
          </div>
          <div className='form-control'>
          <input  name='subject'placeholder='Enter Your Subject'/>
          </div>
          <div className='form-control'>
            <textarea rows={5} cols={20} placeholder='Comment'>
            </textarea>
          </div>
          <button className='button'> Send Message</button>
        </form>
      </div>
    </section>
  )
}
