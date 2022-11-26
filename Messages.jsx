import React from 'react';
import Message from './Message';
import styled from "styled-components"

const Messages = () => {
  return (
    <Messages1>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </Messages1>
  )
}

export default Messages;

const Messages1 = styled.div`
        background-color: #ddddf7;
        padding: 10px;
        height: calc(100% - 160px);
        overflow: scroll;

`

