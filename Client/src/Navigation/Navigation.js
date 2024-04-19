import React, { useContext } from "react";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useGlobalContext } from "../useContext/GlobalContext";
import "./Navigation.css";
export default function Navigation() {
  const { user, Logout, } = useContext(useGlobalContext);
  const imageProfile = user?.image ? user?.image?.replace(/\\/g, "/") : "";

  return (
    <div className="navigation">
      <div className="nav">
        <h2>Blog</h2>
        <NavLinks />
        <div className="search">
          {imageProfile && (
            <NavLink className="userProfile" to="/profile-detail" >
              <img src={`http://localhost:3000/${imageProfile}`} alt=".." />
              <span style={{color:"blue"}}>{user.name && user.name.slice(0, 7).toUpperCase()}</span>
            </NavLink>
          )}
          <button onClick={Logout} className="search">
            {user?.name ? "logout" : "Login"}
          </button>
          <CiSearch />
        </div>
      </div>
    </div>
  );
}
