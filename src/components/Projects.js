import styled from "styled-components";
import NyanCatGame from "../assets/NyanCatGame.png";
import Hangman from "../assets/Hangman.png";
import Cookies from "../assets/Cookies.png";
import Pizza from "../assets/Pizza.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <>
      <ThumbnailGrid>
        <Thumbnail>
          <Container>
            <Picture src={NyanCatGame} alt="NyanCatGame" />
            <Detail>
              This is an interactive game play constructed to learn OOP. Use
              your left and right arrows to avoid enemies or try to chatch
              helper!
            </Detail>
          </Container>
          <Title>NyanCat Game</Title>
          <div>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/"
              >
                <IconGit />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/"
              >
                <IconArrow />
              </a>
            </span>
          </div>
        </Thumbnail>

        <Thumbnail>
          <Container>
            <Picture src={Hangman} alt="Hangman" />
            <Detail>
              I'm pretty sure you already know this game. This game was made to
              learn how to work with React State. Go ahaed and make your guess
              on a letter!
            </Detail>
          </Container>
          <Title>hangman Game</Title>
          <div>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/"
              >
                <IconGit />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/"
              >
                <IconArrow />
              </a>
            </span>
          </div>
        </Thumbnail>

        <Thumbnail>
          <Container>
            <Picture src={Cookies} alt="Cookies" />
            <Detail>
              This is a copy of the cookie clicker game . This game was made to
              learn about React Effect. How many cookies can you get?
            </Detail>
          </Container>
          <Title>Cookies Game</Title>
          <div>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/"
              >
                <IconGit />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/"
              >
                <IconArrow />
              </a>
            </span>
          </div>
        </Thumbnail>

        <Thumbnail>
          <Container>
            <Picture src={Pizza} alt="Pizza" />
            <Detail>
              A pizza menue and order feature. This made to learn about to
              stretch our fetch. Would you like a pizza?
            </Detail>
          </Container>
          <Title>Pizza restaurant</Title>
          <div>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/"
              >
                <IconGit />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/"
              >
                <IconArrow />
              </a>
            </span>
          </div>
        </Thumbnail>

        <Thumbnail>
          <Container>
            <MoreToCome>More to come!</MoreToCome>
          </Container>

          <div>
            <span>
              <IconGit />
            </span>
            <span>
              <IconArrow />
            </span>
          </div>
        </Thumbnail>
      </ThumbnailGrid>
    </>
  );
};

export default Projects;

const ThumbnailGrid = styled.main`
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }

  margin-top: 80px;
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Thumbnail = styled.div`
  @media (max-width: 1200px) {
    height: 35vh;
  }
  @media (max-width: 1200px) {
    height: 40vh;
  }

  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  height: 40vh;
`;

const Container = styled.div`
  @media (max-width: 1200px) {
    height: 400px;
  }

  @media (max-width: 670px) {
    height: 200px;
  }
  height: 350px;
`;

const Picture = styled.img`
  @media (max-width: 1200px) {
    opacity: 0.3;
    height: 410px;
    width: 530px;
  }

  @media (max-width: 670px) {
    opacity: 0.3;
    height: 200px;
    width: 280px;
  }

  height: 350px;
  width: 480px;
  transition: 0.5s ease;
  backface-visibility: hidden;

  ${Container}:hover & {
    opacity: 0.3;
  }
`;

const Title = styled.p`
  @media (max-width: 1200px) {
    font-size: 2em;
    margin-bottom: 8px;
  }

  @media (max-width: 670px) {
    font-size: 1.2em;
    margin-bottom: 0px;
  }

  font-size: 1.8em;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Detail = styled.p`
  @media (max-width: 1200px) {
    opacity: 1;
    width: 400px;
    font-size: 1.3em;
    transform: translate(10%, -200%);
  }

  @media (max-width: 670px) {
    opacity: 1;
    width: 200px;
    font-size: 1em;
    transform: translate(15%, -140%);
  }
  font-size: 1.3em;
  transform: translate(10%, -200%);
  margin: 0;
  padding: 10px;
  width: 400px;
  word-wrap: break-word;
  background-color: white;
  border: solid 2px;
  border-radius: 10px;
  transition: 0.5s ease;
  opacity: 0;
  text-align: center;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const MoreToCome = styled.p`
  @media (max-width: 1200px) {
    font-size: 2.8em;
    padding: 135px;
  }

  @media (max-width: 670px) {
    font-size: 1.4em;
    padding: 80px;
  }

  font-size: 2.5em;
  text-align: center;
  padding: 123px;
`;

const IconGit = styled(FontAwesomeIcon).attrs({ icon: faSquareGithub })`
  @media (max-width: 1200px) {
    font-size: 3em;
  }

  @media (max-width: 670px) {
    font-size: 1.2em;
  }

  font-size: 2em;
  margin: 10px;
`;

const IconArrow = styled(FontAwesomeIcon).attrs({
  icon: faArrowUpRightFromSquare,
})`
  @media (max-width: 1200px) {
    font-size: 3em;
  }

  @media (max-width: 670px) {
    font-size: 1.2em;
  }

  font-size: 2em;
  margin: 10px;
`;
