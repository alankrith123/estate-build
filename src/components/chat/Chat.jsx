import React from 'react'
import './chat.scss'
import { useState } from 'react'

const Chat = () => {
    const [chat, setChat] = useState(true)
  return (
    <div className="chat">
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John</span>
                <p>Bro whats upp nishaaaaa</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John</span>
                <p>Bro whats upp nishaaaaa</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John</span>
                <p>Bro whats upp nishaaaaa</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John</span>
                <p>Bro whats upp nishaaaaa</p>            </div>
        </div>
        {chat && <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John</span>
                </div>
                <span className="close" onClick={() => setChat(false)}>X</span>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Hey, how are you?</p>
                    <span>Just now</span>
                </div>
                 <div className="chatMessage own">
                    <p>Hey, how are you?</p>
                    <span>Just now</span>
                </div>
                 <div className="chatMessage">
                    <p>Hey, how are you?</p>
                    <span>Just now</span>
                </div>
                 <div className="chatMessage own">
                    <p>Hey, how are you?</p>
                    <span>Just now</span>
                </div>
                 <div className="chatMessage">
                    <p>Hey, how are you?</p>
                    <span>Just now</span>
                </div>
            </div>            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>

        </div>}
    </div>
  )
}

export default Chat