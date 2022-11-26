import React from 'react';
import styled from 'styled-components'
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <Chat1>
      <div className="chatInfo">
        <span>Punit Vrashney</span>
        <div className="chatIcons">
          <img src="https://github.com/safak/youtube2022/blob/react-chat/src/img/cam.png?raw=true" alt="" />
          <img src="https://github.com/safak/youtube2022/blob/react-chat/src/img/add.png?raw=true" alt="" />
          <img src="https://github.com/safak/youtube2022/blob/react-chat/src/img/more.png?raw=true" alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </Chat1>
  )
}

export default Chat;

const Chat1 = styled.div`
        flex: 2;

        .chatInfo{
          height: 50px;
          background-color: #5d5b8d;
          display: flex; 
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          color: lightgray;

          img{
            height: 30px;
            cursor: pointer;
            margin-right: 10px;
            
          }
          span{
            font-size: 22px;
          }
        }

       

        `