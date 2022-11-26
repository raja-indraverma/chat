import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats'

const Sidebar = () => {
  return (
    <Sidebar1>
        <Navbar/>
        <Search/>
        <Chats/>
    </Sidebar1>
  )
}

export default Sidebar;

const Sidebar1 = styled.div`
    flex: 1;
    background-color: #3e3c61;
`