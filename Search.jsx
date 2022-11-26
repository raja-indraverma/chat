import React from 'react';
import styled from "styled-components";


const Search = () => {
  return (
    <Search1>
        <div className="searchForm">
            <input type="text" placeholder='Find Friends'/>
        </div>

        <div className="userChat">
            <img src="data:image/jpeg;base64,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"/>
            <div className="userChatInfo">
                <span>punit varshney</span>

            </div>
        </div>
    </Search1>
  )
}

export default Search;

const Search1 = styled.div`
    border-bottom: 1px solid gray;

    .searchForm{
        input{
            background-color: transparent;
            border: none;
            padding: 10px;
            color: white;
            outline: none;

        }
    }

    .userChat{
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: white;
        cursor: pointer;

        &:hover{
            background-color: #2f2d52;
        }
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
    }
`
