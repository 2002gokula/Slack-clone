import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import "./Chat.css"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined"
import db from "../firebase"
import Message from "./Message"
import ChatInput from "./ChatInput"
const Chat = () => {
  const { roomId } = useParams()
  const [roomDetails, setRoomDetails] = useState(null)
  const [roomMessages, setRoomMessages] = useState([])
  const messageEndRef = useRef(null)

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      )
  }, [roomId])

  useEffect(() => {
    messageEndRef.current?.scrollIntoView()
  }, [message])

  return (
    <div className="Chat">
      <div className="Chat__Header  ">
        <div className="Chat__Headerleft">
          <h4 className="Chat__ChannelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="Chat__HeaderRight">
          <p>
            <InfoOutlinedIcon /> Delails
          </p>
        </div>
      </div>
      <div className="chat__message">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
        <div ref={messageEndRef} />
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  )
}

export default Chat
