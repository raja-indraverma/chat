import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Navbar1>
        <span className='logo'> letChat </span>
        <div className="user">
            <img src="data:image/jpeg;base64,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" alt="" />
            <span>john</span>
            <button>Log Out</button>
        </div>
    </Navbar1>
  )
}

export default Navbar;

const Navbar1 = styled.div`
        display: flex;
        align-items: center;
        height: 50px;
        padding: 10px;
        justify-content: space-between;
        background-color: #2f2f52;
        color: #ddddf7;

        .logo{
            font-weight: bold;
            font-size: 27px;
        }

        .user{
            display: flex;
            gap: 10px;
        }

        img{
            background-color: #ddddf7;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            object-fit: cover;
        }

        button{
            background-color: #5d5b8d;
            color: #ddddf7;
            font-size: 10px;
            border: none;
            cursor: pointer;
            transition-delay: 300ms;
            padding: 0 10px;
            border-radius: 5px;
            &:hover{
                transform: scale(1.05);
            }
        }

`