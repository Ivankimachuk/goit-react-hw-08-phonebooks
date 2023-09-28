import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Button = styled.button`
color: black;
background-color: #DCDCDC;
font-size: 20px;
padding: 10px;
border-radius: 20px;
cursor: pointer;
border:none;
box-shadow: rgba(0, 0, 0, 0.75) 2px 2px 5px 0px;
transition-property: color, background-color ;
transition-duration: 350ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
:hover {
    background-color: black;
    color: white;
     }
`
export const FormContainer = styled.form`
margin: 0 auto;
display: flex;
flex-direction: column;
padding: 20px;
gap: 20px;
background-color: #DCDCDC;
border-radius: 20px;
margin-bottom: 50px;
`

export const Container = styled.div`
align-items: center;
display: flex;
flex-direction: column;
margin: 20px auto;
width: 900px;
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    padding: 5px;
`
export const Input = styled.input`
height: 30px;
border-radius: 20px;
font-size: 18px;
padding: 10px;
border: 1px solid black;
`
export const ContainerList = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
padding-top: 20px;
`
export const ContactItem = styled.li`
display: flex;
justify-content: space-between;

`
export const Btn = styled.button`
color: black;
background-color: #DCDCDC;
font-size: 15px;
padding: 10px;
border-radius: 20px;
cursor: pointer;
border:none;
box-shadow: rgba(0, 0, 0, 0.75) 2px 2px 5px 0px;
margin-left: 20px;
transition-property: color, background-color ;
transition-duration: 350ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
:hover {
    background-color: black;
    color: white;
     }
`

export const UserFormWrap = styled.div`
 background-color: #fff; 
  border-radius: 10px; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); 
  padding: 20px;
  max-width: 800px; 
  margin: 0 auto; 
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.header`
  background-color: #DCDCDC; 
  color: black; 
  padding: 30px 0;
  margin-bottom: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
  &:hover {
    transform: skew(-10deg);
  }
 

 
`;
export const Logo = styled.span`
  font-size: 28px;
  margin-right: 10px;
  color: #fff; 
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 40px;
  margin-right: 20px;
`
export const Greatings = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: black;
`



export const NavLinkStyled = styled(NavLink)`
color: black;
background-color: #DCDCDC;
font-size: 20px;
padding: 10px;
border-radius: 20px;
cursor: pointer;
border:none;
box-shadow: rgba(0, 0, 0, 0.75) 2px 2px 5px 0px;
transition-property: color, background-color ;
transition-duration: 350ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
:hover {
    background-color: black;
    color: white;
     }
     &.active {
      -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
  background-color: #C0C0C0;
   }
`;

export const Heading = styled.h1`
  font-size: 96px;
  text-align: center;
  
`;
