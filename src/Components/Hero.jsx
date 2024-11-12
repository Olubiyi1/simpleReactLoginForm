import styled from "styled-components";
import bg from "../assets/Images/bg.svg"
import { useState } from "react";

const Hero = () => {

    const [details,setDetails] = useState({
        email:"",
        password:""
    })

    const handleSubmit = ()=>{
        console.log(details);

        setDetails({
            email:"",
            password:""
        })
        
    }

    return ( 
        <HeroSection>
            <Header>
                WELCOME
            </Header>

            <input type="text" placeholder="email/username " 
            value={details.email}
            onChange={(e)=>{setDetails({...details, email:e.target.value})}}
            />
            <input type="password" placeholder="password "
            value={details.password}
            onChange={(e)=>{setDetails({...details, password:e.target.value})}}
            />
            <button onClick={handleSubmit}>LOGIN</button>
            <Paragraph>
                Don't have account? <span>Register</span>
            </Paragraph>
            <p>{details.email}</p>
            <p>{details.password}</p>
        </HeroSection>
     );
}
 
export default Hero;

const HeroSection = styled.div`
height: 100vh;
max-width: 1440px;
background-image:url(${bg});
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;

input{
    width: 314px;
    border: none;
    height:40px;
    opacity: 100%;
    background-color: rgb(81,157,176);
    border-radius: 10px;
    padding: 5px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
 
input::placeholder{
   padding: 100px;
   color: white;
}
input:focus{
    border:none;
}

button{
    width: 127px;
    height: 47px;
    border-radius: 20px;
    background-color: rgb(54,112,212);
    color: white;
    border: none;
    font-size: 20px;
    font-weight:bold;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    } 
`
const Header = styled.h1`
font-size: 64px;
color: white;
`
const Paragraph = styled.p`

font-size: 12px;
span{
    color: yellow;

}
`
