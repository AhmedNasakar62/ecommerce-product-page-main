import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import imageAvatar from "./images/image-avatar.png";
import Menu from "./images/icon-menu.svg";

const Header = ({ cart, setCart, select }) => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const closeNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <Container>
      <Wrapper>
        <figure onClick={toggleNav}>
          <img src={Menu} alt="Menu" />
        </figure>
        <h2>Sneakers</h2>
        <Nav visible={navVisible}>
          <h4 onClick={closeNav}>X</h4>
          <NavLink to={`/`}>Collections</NavLink>
          <NavLink to={`/`}>Men</NavLink>
          <NavLink to={`/`}>Women</NavLink>
          <NavLink to={`/`}>About</NavLink>
          <NavLink to={`/`}>Contact</NavLink>
        </Nav>
      </Wrapper>

      <Article>
        <Icon>
          <AiOutlineShoppingCart
            onClick={() => setCart(cart === "none" ? "block" : "none")}
          />
          <div>{select.length}</div>
        </Icon>
        <section>
          <Figure>
            <img src={imageAvatar} alt="" />
          </Figure>
        </section>
      </Article>
    </Container>
  );
};

const Container = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-top: 0.5rem;
  border-bottom: 2px solid hsl(223, 64%, 98%);
`;

const Wrapper = styled.article`
  font-size: clamp(0.7rem, 1.3vw, 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  figure {
    display: none;
  }

  @media screen and (max-width: 855px) {
    justify-content: flex-start;
    padding-left: 2rem;
    gap: 1rem;
    margin: 1rem 0;
    figure {
      display: block;
      cursor: pointer;
    }
  }
`;

const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 855px) {
    margin: 1rem 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  h4 {
    display: none;
  }

  @media screen and (max-width: 855px) {
    position: absolute;
    top: 0;
    left: 0;
    gap: 1rem;
    flex-flow: column nowrap;
    width: 40%;
    height: 100%;
    background-color: white;
    z-index: 1;
    ${({ visible }) =>
      !visible &&
      css`
        display: none;
      `}
    h4 {
      display: block;
      margin: 2rem 0 0 2rem;
      cursor: pointer;
      color: hsl(219, 9%, 45%);
    }
  }
`;

const NavLink = styled(Link)`
  height: 5.5rem;
  text-decoration: none;
  display: grid;
  place-content: center;
  color: hsl(220, 14%, 75%);
  &:hover {
    border-bottom: 3.5px solid hsl(26, 100%, 55%);
    color: hsl(219, 9%, 45%);
  }

  @media screen and (max-width: 855px) {
    height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2rem;
    color: hsl(220, 13%, 13%);
    &:nth-child(2) {
      margin-top: 2rem;
    }
    &:hover {
      border-bottom: none;
      color: hsl(219, 9%, 45%);
    }
  }
`;

const Figure = styled.figure`
  width: 50%;
  border: 2px solid hsl(26, 100%, 55%);
  border-radius: 50%;
  cursor: pointer;
`;

const Icon = styled.section`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  cursor: pointer;
  position: relative;
  div {
    position: absolute;
    top: 0;
    left: 60%;
    background-color: hsl(26, 100%, 55%);
    font-size: 0.6rem;
    padding: 0.1em;
    border: none;
    border-radius: 1rem;
    color: hsl(0, 0%, 100%);
  }
`;

export default Header;
