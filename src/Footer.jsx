import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Attribution>
      Challenge by
      <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </Link>
      . Coded by <Link to="#">Ahmed Muhammed Abdulrazaq</Link>.
    </Attribution>
  );
};

const Attribution = styled.footer`
  font-size: 11px;
  text-align: center;
  margin-top: 0.5rem;
  a {
    color: hsl(228, 45%, 44%);
  }
`;

export default Footer;
