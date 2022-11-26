import React from 'react';
import Sidebar from '../homeComponents/Sidebar';
import Chat from '../homeComponents/Chat';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeConatiner>
        <div className='Container'>
            <Sidebar/>
            <Chat/>
        </div>
    </HomeConatiner>
  )
}

export default Home;

const HomeConatiner = styled.div`
        background-color: #a7bcff;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        .Container {
            border: 1px solid white;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
        }

`

