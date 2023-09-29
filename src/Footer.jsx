import styled from "styled-components";

const Footer = () => {
  return (
    <Attribution>
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Your Name Here</a>.
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
