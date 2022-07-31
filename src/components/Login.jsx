import React from 'react'
import styled from 'styled-components';
import { FcGoogle } from "react-icons/fc";
import {auth,signInWithPopup,provider} from "../Firebase"



export default function Login() {
  
  function handleAuth(){
    signInWithPopup(auth,provider)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <Lpage>
      <Lheader>
        <h1>Linked <img src="/images/linkedin.png" alt=''/></h1>
        <div>
          <h2>Join now</h2>
          <span onClick={handleAuth} >Signin</span>
        </div>
      </Lheader>
      <Lbody>
        <p>Welcome to your professional comunity</p>
        <img src="/images/login-hero.svg" alt=''></img>
        <span onClick={handleAuth} > <FcGoogle/> Sign in with Google</span>
      </Lbody>
    </Lpage>
  )
}

const Lpage = styled.div`

`;
const Lheader = styled.header`
display:flex;
align-items:center;
height:13vh;

h1{
  font-size:1.88rem;
  color:#0a66c2;
  margin-left:5rem;
  display:flex;
  font-weight:bold;
  img{
    height:1.85rem;
    margin:0.1rem;
  }
}
div{
  margin-left:auto;
  display: flex;
  justify-content:space-around;
  align-items:center;
  width: 15rem;
  margin-right: 5rem;
  h2{
    color:rgba(0,0,0,0.3);
    font-size: 1.1rem;
    padding:0.5rem;
    border-radius: 0.7rem;
    &:hover{
      background-color:rgba(0,0,0,0.08);;
      
    }

  }
  span{
    padding:0.5rem 1.3rem;
    color:#0a66c2;
    border-radius:1rem;
    border : 1.5px solid #0a66c2;
  }
}

@media (max-width: 768px) {
  justify-content:space-between;

  h1{
    margin-left:0.5rem;
  }
  div{
    width:12rem;
    margin-right:0.5rem;
  }
}
`;

const Lbody = styled.div`
padding-top:1rem;
margin-left:4rem;
@media (max-width: 768px) {
  margin-left:0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:0;
}

p{
  font-size:3rem;
  color:#0a66c2;
  font-weight:100;
  max-width:40% ;
  display:inline-block;
  margin-top:3rem;
  margin-bottom:2rem;
  @media (max-width: 768px) {
  font-size:1.5rem;
  max-width:100%;
  margin:1rem;
}
  
}
img{
  
  width:50%;
  height:29rem;
  float: right;
  @media (max-width: 768px) {
    width:100%;
    height:20rem;
    float:none;
  }
}
span{
  display: inline-block;
  border:1.7px solid rgba(0,0,0,0.6);
  padding:0.6rem 4rem;
  border-radius: 2rem;
  margin:3rem;
  font-size:1.2rem;
  display: flex;
  justify-content: center;
  max-width:15rem;
  text-align: center;
  @media (max-width: 768px) {
  margin: 1rem;
  
  }
  
}
`;