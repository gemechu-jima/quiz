import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { VscThreeBars } from "react-icons/vsc";
import "./Sidebar.css";
import NavLinks from "./NavLinks";
import Backdrop from "./Backdrop";
import Auth from "../Auth/Signup"
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  const [openSidebar, setOpensSidebar] = useState(false);
  const handleSidebar=()=>{
    if(openSidebar){
      setOpensSidebar(!openSidebar)
    }
  }
  return (
    <div className={`sidebar ${openSidebar ? "column" : "row"}`}>
      {openSidebar && <Backdrop handleSidebar={handleSidebar}/>}
      <h1 >Quiz</h1>
      {openSidebar && (
        <>
          <NavLinks  handleSidebar={handleSidebar} />
          <div className="search">
            <NavLink to="/auth">signup</NavLink>
            <CiSearch />
          </div>
           <ImCross
            className="cross"
            onClick={() => setOpensSidebar(!openSidebar)}
          />
        </>
      )}
      {!openSidebar && (
        <button
          onClick={() => setOpensSidebar(!openSidebar)}
          className="hamburger"
        >
          <VscThreeBars />
        </button>
      )}
    </div>
  );
}
