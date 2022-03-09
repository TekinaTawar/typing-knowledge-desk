import styled from "styled-components";

const _Footer = styled.footer`
  background-color: var(--dark-bg);
  color: var(--white);
  min-height: 130px;
  font-size: var(--fs-s);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <_Footer>
      <p>Copyright © 2021 Typing Knowledge Desk - All Rights Reserved.</p>
    </_Footer>
  );
};

export default Footer;
