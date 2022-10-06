import React from "react"
import { useNavigate } from "react-router-dom"
import db from "../firebase"
import "./SidebarOption.css"
const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const Navigate = useNavigate()
  const addChannel = () => {
    const ChannelName = prompt("Please enter the Channel")
    if (ChannelName) {
      db.collection("rooms").add({
        name: ChannelName,
        })
    }
  }
  const selectChannel = () => {
    if (id) {
      Navigate(`room/${id}`)
    } else {
      Navigate(title)
    }
  }
  return (
    <div
      className="SidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebaroption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebaroption__channel">
          <span className="sidebaroption_hashtag">#</span>
          {title}
        </h3>
      )}
    </div>
  )
}

export default SidebarOption
