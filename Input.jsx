import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <Input1>
    <input type="text" placeholder='Type your message...'/>
    <div className="send">
        <img src="https://github.com/safak/youtube2022/blob/react-chat/src/img/attach.png?raw=true" alt="" />
        <input type="file" style = {{display: "none"}} id="file" />
        <label htmlFor="file">
            <img src="https://github.com/safak/youtube2022/blob/react-chat/src/img/img.png?raw=true" alt="" />
        </label>
        <button>Send</button>
    </div>
    </Input1>
  )
}

export default Input;

const Input1 = styled.div`
    height: 50px;
    background-color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input{
        width: 100%;
        border: none;
        outline: none;
        color: #2f2d52;
        font-size: 18px;

        &::placeholder{
            color: lightgray;
        }
    }

    .send{
        display: flex;
        align-items: center;
        gap: 10px;

        img{
            height: 24px;
            cursor: pointer;

        }

        button{
            border: none;
            padding: 10px 15px;
            color: white;
            background-color: #8da4f1;
            cursor: pointer;
        }
    }
`