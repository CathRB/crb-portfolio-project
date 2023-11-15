import styled from "styled-components";
import AboutMeBackground from "../assets/AboutMeBackground.jpg";
import ReactTyped from "react-typed";
import HTMLLogo from "../assets/HTMLLogo.png";
import JavaScriptLogo from "../assets/JavaScriptLogo.png";
import CSSLogo from "../assets/CSSLogo.png";
import ReactLogo from "../assets/ReactLogo.png";
import NodeJSLogo from "../assets/NodeJSLogo.png";
import MongoDBLogo from "../assets/MongoDBLogo.png";

const AboutMe = () => {
  const escape = (codingString) => {
    return codingString.replace(/</g, "&lt;");
  };

  return (
    <>
      <Background src={AboutMeBackground} alt="AboutMeBackground" />

      <Main>
        <h1>About me</h1>
        <p>
          I'm a web developper. I've always been a curious person who wants to
          learn new things. I'm dynamic, very involved in everything I do and
          I'm always eager to take new challenge. Go to the contact section and
          send me an e-mail, I would be please to meet you!{" "}
        </p>
        <h2>
          <ReactTyped
            strings={[escape("<Coding skills")]}
            typeSpeed={100}
            cursorChar="/>"
            showCursor={true}
          />{" "}
        </h2>
        <LogoContainer>
          <Logo src={HTMLLogo} alt="Html" />
          <Logo src={JavaScriptLogo} alt="Javascript" />
          <Logo src={CSSLogo} alt="Css" />
          <Logo src={ReactLogo} alt="React" />
          <Logo src={NodeJSLogo} alt="React" />
          <Logo src={MongoDBLogo} alt="React" />
        </LogoContainer>
      </Main>
    </>
  );
};

export default AboutMe;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Main = styled.main`
  @media (max-width: 670px) {
    margin-top: 20px;
  }
  margin-top: 75px;
  text-align: center;

  h1 {
    @media (max-width: 1200px) {
      font-size: 3em;
      margin-bottom: 80px;
    }

    @media (max-width: 670px) {
      font-size: 1.9em;
    }

    font-family: "Noto Serif", serif;
    font-size: 3.1em;
  }

  p {
    @media (max-width: 1200px) {
      font-size: 2.1em;
      margin-left: 60px;
      width: 85vw;
    }

    @media (max-width: 670px) {
      font-size: 0.9em;
      margin-left: 20px;
      width: 85vw;
    }

    font-size: 1.9em;
    width: 70vw;
    margin-left: 350px;
    font-family: "Playpen Sans", cursive;
  }

  h2 {
    @media (max-width: 1200px) {
      font-size: 2.8em;
      margin-top: 80px;
    }

    @media (max-width: 670px) {
      font-size: 1.5em;
      margin-top: 20px;
    }
    margin-top: 60px;
    font-family: "Pixelify Sans", sans-serif;
    font-weight: 500;
    font-size: 2.6em;
  }
`;

const LogoContainer = styled.div`
  @media (max-width: 1200px) {
    margin-left: 25px;
    margin-top: 80px;
    height: 8vh;
  }
  @media (max-width: 670px) {
    margin-left: 20px;
    margin-top: 10px;
    height: 7vh;
  }

  display: flex;
  margin-top: 50px;
  height: 11vh;
  margin-left: 350px;
`;

const Logo = styled.img`
  @media (max-width: 1200px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 670px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  margin-left: 40px;
  margin-right: 40px;
`;
