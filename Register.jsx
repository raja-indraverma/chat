import React, { useState } from 'react'
import styled from 'styled-components';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage} from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util';
import { doc, setDoc } from 'firebase/firestore'; 


const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) =>{
      e.preventDefault()
      const displayName = e.target[0].value
      const email = e.target[1].value
      const password = e.target[2].value
      const file = e.target[3].files[0]

try{
const res = await createUserWithEmailAndPassword(auth, email, password)




const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on(
  (error) => {
    setErr(true)
    
  }, 
  () => {
   
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL,
      });

      await setDoc(doc(db, "users", res.user.uid)),{
        uid: res.user.id,
        displayName,
        email,
        photoURL: downloadURL
      }
    });
  }
);

  

}catch(err){
  setErr(true);
}


  }
  

  return (
    <FormContainer>
        <FormWrapper>
            <Logo>letChat</Logo>
            <Title>Registration</Title>
            <Form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Name' />
                <input type="email" placeholder='Enter Email'/>
                <input type="password" placeholder='Create Password'/>
                <input style={{display: "none"}} type="file" id="file"/>
                <label htmlFor="file">
                  <img src="https://github.com/safak/youtube2022/blob/react-chat/src/img/addAvatar.png?raw=true"/>
                  <span>add avatar</span>
                </label>
                <button>Sign Up</button>

                {err && <span> something went wrong</span>}
            </Form>
            <p>Already have an account? Login</p>
        </FormWrapper>
    </FormContainer>
  )
}

export default Register;

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
