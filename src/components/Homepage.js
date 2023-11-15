import styled from "styled-components";
import HompageBackground from "../assets/HompageBackground.jpg";
import ReactTyped from "react-typed";


const Homepage = () => {
  const escape = (titleString) => {
    return titleString.replace(/</g, "&lt;");
  };

  return (
    <>
      <Background src={HompageBackground} alt="HompageBackground" />
    
           
      <Main>
        <h1>
          <ReactTyped
            strings={[escape("<Welcome to my web developper portfolio")]}
            typeSpeed={100}
            cursorChar="/>"
            showCursor={true}
          />
        </h1>

        <h2>Catherine Racicot Bergeron</h2>
      </Main>
    </>
  );
};

export default Homepage;

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
  @media (max-width: 1200px) {
    margin-top: 20px;
  }

  @media (max-width: 670px) {
    margin-top: -80px;
  }

  margin-top: 150px;
  text-align: center;

  h1 {
    @media (max-width: 1200px) {
      font-size: 3.4em;
      margin-top: 140px;
      
    }

    @media (max-width: 670px) {
      font-size: 1.7em;
      
    }

    font-family: "Roboto Slab", sans-serif;
    font-size: 3.1em;
  }

  h2 {
    @media (max-width: 1200px) {
      font-size: 3.2em;
      margin-top: 140px;
    
    }

    @media (max-width: 670px) {
      font-size: 1.3em;
      margin-top: 70px;
      
    }

    margin-top: 100px;
    font-family: "Oleo Script Swash Caps", sans-serif;
    font-weight: 300;
    font-size: 2.6em;
  }
`;
