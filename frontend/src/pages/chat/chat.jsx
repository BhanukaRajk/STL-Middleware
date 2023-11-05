import React, { useState, useEffect } from 'react';
import ChatProfile from './ChatProfile';
import SelectedChat from './SelectedChat';


const Chat = () => {
    return (
        <div className="chat responsive-chat-container">
            <div className="chat-message-container notSelectedUserPage px-16 py-4 mt-4">
                <SelectedChat />
            </div>
        </div>
    );
};

export default Chat;
