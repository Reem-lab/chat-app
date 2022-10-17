import React, { useState } from 'react';

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = async () => {
    if(currentMessage !== ""){
      const messagesData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      }

     await socket.emit("send_messages", messagesData);
    }
  }


  return (
    <div>
      <div className='chat-header'>
        <h4>Live chat</h4>
      </div>
      <div className='chat-body'></div>
      <div className='chat-footer'>
        <input 
        type="text" 
        placeholde="Hey.." 
        onChange={(e) => setCurrentMessage(e.target.value) }
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chat
