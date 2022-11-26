import React from 'react'
import styled from 'styled-components';

const Login = () => {
  return (
    <FormContainer>
        <FormWrapper>
            <Logo>letChat</Logo>
            <Title>Login</Title>
            <Form>
               
                <input type="email" placeholder='Enter Email'/>
                <input type="password" placeholder='Create Password'/>
                <input style={{display: "none"}} type="file" id="file"/>
               
                <button>Sign in</button>
            </Form>
            <p>Don't have an account? Sign up</p>
        </FormWrapper>
    </FormContainer>
  )
}

export default Login;

const FormContainer = styled.div`
    background-color: #a7bcff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;`

const FormWrapper = styled.div`
    background-color: white;
    padding: 20px 60px;
    border-radius: 10px;
    display: flex;
    flex-direction : column;
    gap: 10px;
    align-items: center;

    p{
      color: #5d5b8d;
      margin-top: 10px;
      font-size: 12px;
    }
`
const Logo = styled.span`
    color: #5d5b8d;
    font-size: 24px;
    font-weight: bold; `
const Title = styled.span`
    color: #5d5b8d;
    font-size: 12px; 
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;

    input{
      padding: 15px;
      border: none;
      border-bottom: 1px solid #a7bcff;

      &::placeholder{
        color: rgb(175,175,175)
      }

     
    }
    button{
      background-color: #7b96ec;
      border: none;
      padding: 10px;
      border-radius: 10px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition-duration: 300ms;
      &:hover{
        transform: scale(1.05)
      }
      
    }

    label{
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      font-size: 12px;
      color: #8da4f1;

      img{
        width: 32px;
      }
    }

    `
