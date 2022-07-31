import React from 'react'
import styled from 'styled-components';
import { ImSearch } from "react-icons/im";

export default function Header() {
  return (
    <Containner>
      <Leftdiv>
        <a href="/home"><img src="/images/linkedin.png" alt="linkedin" /></a>
        <div>
          <ImSearch/>
          <input type="text" placeholder="Search" />
        </div>

      </Leftdiv>
      <Rightdiv>
        <div>
          <img src="/images/nav-home.svg" alt="home" />
          <span>Home</span>
        </div>
        <div>
        <img src="/images/nav-network.svg" alt="Mynetwork" />
        <span>My Network</span>
        </div>
        <div>
        <img src="/images/nav-jobs.svg" alt="jobs" />
        <span>Jobs</span>
        </div>
        <div>
        <img src="/images/nav-messaging.svg" alt="message" />
        <span>messaging</span>
        </div>
        <div>
        <img src="/images/nav-notifications.svg" alt="notification" />
        <span>Notifications</span>
        </div>
        <div className='me' >
        <a>
          <img  src="/images/user.svg" alt="pic" />
          <span>Me <img className="down" src="/images/down-icon.svg" alt="pic" ></img></span>
        </a>
        <Signout>Sign Out</Signout>
        </div>
        <div>
        <img src="/images/nav-work.svg" alt="work" />
        <span>Work</span>
        </div>
      </Rightdiv>
    </Containner>
  )
}

const Containner = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0.5rem 4rem;
    font-family:sans-serif;
    background-color:#fff;
    @media (max-width: 768px) {
        margin:0.5rem;
    }
`
const Leftdiv = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    
    img{
        margin-right:0.5rem;
    }
    div{
        display: flex;
        padding:0.5rem;
        background:rgba(0,0,0,0.1);
        img{
            margin-right:0.5rem;
        }
        input{
            border:none;
            outline:none;
            background:rgba(0,0,0,0);
            margin-left:0.5rem;
            height:1.2rem;
        }
    }
`

const Signout = styled.section`
position: absolute;
top:4rem;
opacity:0;
background-color: aqua;
padding: 0.5rem;
border-radius: 0.5rem;
`

const Rightdiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 31rem;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width:1.8rem;
            height:1.8rem;
        }
        span{

        }
    }

.me{
    border-right:2px solid #ccc;
    img{
        border-radius:50%;
    }
    padding-right:1rem;
    &:hover{
        ${Signout}{
            opacity:1;
        }

    }
}
@media (max-width: 768px) {
        position:fixed;
        bottom:0.5rem;
        left:0;
        right:0;
        width:100%;
    }
.down{
    width:1rem;
    height:1rem;
    
}
`
