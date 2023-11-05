import React, { useEffect, useState } from 'react';
import './chat.css';
import RecivierMessage from './RecivierMessage';
import SenderMessage from './SenderMessage';
import { LuSend } from 'react-icons/lu';
import supportUser from '../../assets/images/logos/support-user.png';

// import io from 'socket.io-client';



const SelectedChat = ({ userName = "Support User", userProfile, selectedUserID }) => {
    const [message, setMessage] = useState('');
    const [sendingMsg, setSendingMsg] = useState([]);
    const [recivingMsg, setRecivingMsg] = useState([]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        socketIO.emit("sendEvent", {
            senderID: user.id,
            receiverID: selectedUserID,
            message: message
        });

        let createdDate = new Date();
        sendMsgToTechSupportApi({ senderID: user.id, receiverID: selectedUserID, message: message, createdDate: createdDate })
        setSendingMsg([...sendingMsg, { message: message }]);
        setMessage('');
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            socketIO.emit("sendEvent", {
                senderID: user.id,
                receiverID: selectedUserID,
                message: message
            });

            let createdDate = new Date();
            sendMsgToTechSupportApi({ senderID: user.id, receiverID: selectedUserID, message: message, createdDate: createdDate })
            setSendingMsg([...sendingMsg, { message: message }]);
            setMessage('');
        }
    }

    return (
        <>
            <div className="chat-header">
                <div className="profile-image">
                    <img src={supportUser} alt="" />
                </div>
                <div className="name">
                    <h1 className='text-xl'>{userName}</h1>
                </div>
            </div>
            <div className="chat-body">
                {
                    sendingMsg.map((msg) => (
                        <SenderMessage SendMessageText={msg.message} />
                    ))
                }

                {
                    recivingMsg.map((msg) => (
                        <RecivierMessage RecivedMessageText={msg.message} />
                    ))
                }
            </div>
            <div className="chat-send">
                <input type="text" placeholder="Type a message here" className='text-white' value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyPress} />
                <button onClick={handleSendMessage}><LuSend /></button>
            </div>
        </>
    );
}

export default SelectedChat;
