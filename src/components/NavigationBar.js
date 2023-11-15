import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {

return (
    <NavigationMenu>
        <NavItem to="/">Homepage</NavItem>
        <NavItem to="/about">About Me</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavigationMenu>
)
}

export default NavigationBar


const NavigationMenu = styled.header`
  display: flex;
  justify-content: flex-end;
`;

const NavItem = styled(NavLink)`
  @media (max-width: 1200px) {
    font-size: 1.8em;
    }

  @media (max-width: 670px) {
    font-size: 1em;
  }

  text-decoration: none;
  padding: 5px;
  margin-right: 10px;
  font-family: "Playfair Display", sans-serif;
  color: black;
  font-weight: 700;
  font-size: 1.5em;

  &.active {
    color: purple;
  }
`;