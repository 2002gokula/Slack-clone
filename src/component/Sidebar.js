import React, { useEffect, useState } from "react"
import "./Sidebar.css"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import AddIcon from "@mui/icons-material/Add"
import InsertCommentIcon from "@mui/icons-material/InsertComment"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import AppsIcon from "@mui/icons-material/Apps"
import FileCopyIcon from "@mui/icons-material/FileCopy"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import CreateIcon from "@mui/icons-material/Create"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import SidebarOption from "./SidebarOption"
import db from "../firebase"
import { useStateValue } from "../StateProvider"
const Sidebar = () => {
  const [{ user }] = useStateValue()
  const [channels, setChannels] = useState([])

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    )
  }, [])
  return (
    <div className="Sidebar">
      <div className="Sidebar__Header">
        <div className="Sidebar__info">
          <h2>GOKULA </h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>

      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="gokula" />
      <SidebarOption Icon={ExpandLessIcon} title="gokula" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channel" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  )
}

export default Sidebar
