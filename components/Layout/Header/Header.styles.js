import styled from "styled-components";
import { Container } from "components/Shared";

export const Header = styled.header``;

// Header section 1
export const Section1 = styled(Container)`
  background-color: var(--dark-bg);
  min-height: 8rem;
  & > .wrapper {
    padding: 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 1.5rem;

  & > a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background-color: white;
    border-radius: 50%;
  }

  & > .twitter {
    background-color: #55acee;
  }

  & > .instagram {
    background-color: #c536a4;
  }

  & > a > * {
    z-index: 0;
  }

  & > a > .facebook {
    height: 100%;
    width: 100%;
    color: #3b5998;
    transform: scale(1.05);
  }

  & > a > .twitter {
    color: white;
    width: 70%;
    height: 70%;
  }

  & > a > .instagram {
    color: white;
    width: 80%;
    height: 80%;
  }
`;

// Header Nav Section
export const Nav = styled.nav`
  background-color: hsl(0, 0%, 97%);
  width: 100%;
`;

export const NavLv2 = styled.ul`
  bottom: 0px;
  transform: translateY(100%);
  position: absolute;
  display: none;
  background-color: #478ac9;
  z-index: 1;
  & * {
    color: white;
  }

  & > li {
    padding: 4px 20px;
    border-bottom: 1px solid white;
  }
`;

export const NavLv1 = styled.ul`
  position: relative;
  width: 95%;
  height: 6rem;
  max-width: var(--layout-width);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  font-weight: 600;

  & > li {
    /* background-color: orange; */
    height: 100%;
    display: flex;
    align-items: center;
  }

  & > li:hover > ${NavLv2} {
    display: block;
  }
`;
