import React from "react"
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"
import HelpIcon from "@mui/icons-material/Help"
import { Avatar } from "@mui/material"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import { useStateValue } from "../StateProvider"
const Header = () => {
  const [{ user }] = useStateValue()
  return (
    <div className="Header">
      <div className="Header__left">
        <Avatar src={user?.photoURL} alt={user?.displayName} />
        <AccessTimeIcon />
      </div>
      <div className="Header__Search">
        <SearchIcon />
        <input type="text" placeholder="Search Gokula krishnan" />
      </div>
      <div className="Header__right">
        <HelpIcon />
      </div>
    </div>
  )
}

export default Header
