import { useState, useEffect } from 'react';
import '../Templates/chat.css';
import chatData from '../data/chat.json';
import axios from 'axios';
import fs from 'fs';

const ChatPage1 = () => {
  const [chatDataState, setChatDataState] = useState({});
  const [userQuery, setUserQuery] = useState('');

  useEffect(() => {
    setChatDataState(chatData);
  }, []);

  const handleSubmit = async () => {
    console.log('Submitted Query:', userQuery);
    const botResponse = await callBot(userQuery);
    setUserQuery('');
    saveChatData(userQuery, botResponse); // Call the function to save chat data
  }

  const callBot = async (prompt) => {
    console.log('callBot called with prompt:', prompt);
    const inputs = {
      input: {
        prompt: prompt,
        system_prompt: `You are a personal menstrual health chatbot dedicated to assisting with menstrual health queries. Remember the user's medical history, including Endometriosis, and consider their previous chat interactions (${JSON.stringify(chatDataState)}), especially when providing personalized advice. If the user mentions new medical conditions during the conversation, integrate this information thoughtfully into your responses. Don't mention that you are a menstrual health chatbot and don't include emojis while giving response. Your primary objective is to provide informative and supportive guidance in a conversational manner.`,
        max_new_tokens: 200,
      },
    };

    try {
      console.log('Calling the chat server... with input: ', inputs);
      const response = await axios.post('http://localhost:3000/chat', inputs, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Chat server response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error calling the chat server:', error);
      return '';
    }
  };

  const saveChatData = (userQuery, botResponse) => {
    const updatedChatData = {
      ...chatDataState,
      [userQuery]: botResponse,
    };
    setChatDataState(updatedChatData);
    const jsonData = JSON.stringify(updatedChatData, null, 2);
    fs.writeFile('./data/chat.json', jsonData, (err) => {
      if (err) {
        console.error('Error writing file', err);
      } else {
        console.log('Successfully wrote to file');
      }
    });
  };

  return (
    <div className="chat-container">
      <h1>Chat History</h1>
      <div className="chat-history">
        {Object.entries(chatDataState).map(([user, botResponse], index) => (
          <div key={index} className="chat-entry">
            <p className="user">User: {user}</p>
            <p className="bot">Bot: {botResponse}</p>
          </div>
        ))}
      </div>
      <div className="input-area">
        <textarea
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          placeholder="Enter your query..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ChatPage1;
