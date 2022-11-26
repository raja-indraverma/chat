import React from 'react';
import styled from 'styled-components';


const Message = () => {
  return (
    <Message1 className="message1 owner">
        <div className="messageInfo">
            <img src="data:image/jpeg;base64,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" alt="" />
            <span>just now</span>
        </div>

        <div className="messageContent">
            <p>hello baby doll kaise ho</p>
            <img src="data:image/jpeg;base64,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" alt="" />
        </div>
    </Message1>
  )
}

export default Message;

const Message1 = styled.div`

        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        align-items: center;

        .messageInfo{
            display: flex;
            flex-direction: column;
            color: gray;
            font-weight: 300;

            img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            
        }

        }

        .messageContent{
            max-width: 80%;
            display: flex;
            flex-direction: column;

            p{
                background-color: white;
                padding: 10px 20px;
                border-radius: 0px 10px 10px 10px;
                max-width: max-content;
            }

            img{
                width: 50%;

            }
        }

        &.owner{
            flex-direction: row-reverse;
            .messageContent{
                align-items: flex-end;
            p{
                background-color: #8da4f1;
                color: white;
                border-radius: 10px 0 10px 10px;
            }
        }
        }
`