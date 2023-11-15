import styled  from "styled-components";
import ContactForm from "./ContactForm"
import ContactBackground from "../assets/ContactBackground.jpg";



const Contact = () => {
    return (
        <>
        <Background src={ContactBackground} alt="ContactBackground"/>
    <ContactForm/>
      
   </>
      );
    
  }
  
  export default Contact;


  const  Background = styled.img `

  @media (max-width: 1200px) {
    width: 100%;
  height: 90%;
  object-fit: cover;
  margin-top: 50px;
    }
    
  @media (max-width: 670px) {
    width: 100%;
  height: 90%;
  object-fit: cover;
  margin-top: 20px;
    }
  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  height: 93%;
  object-fit: contain;
  z-index: -1;
  `;




