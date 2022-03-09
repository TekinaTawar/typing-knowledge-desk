import Image from "next/image";
import styled from "styled-components";
import logoImage from "public/logoImage.png";
import logoText from "public/logoText.svg";

const _Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3ch;
  width: 20ch;
  /* background-color: blue; */
  font-size: 2.8rem;
  gap: 1ch;

  & > .logoImage {
    position: relative;
    width: 3ch;
    height: 90%;
    /* background-color: pink; */
  }
  & > .logoText {
    position: relative;
    height: 100%;
    width: 80%;
  }
`;
const Logo = () => {
  return (
    <_Logo>
      <div className="logoImage">
        <Image src={logoImage} layout="fill" objectFit="contain" />
      </div>
      <div className="logoText">
        <Image src={logoText} layout="fill" objectFit="contain" />
      </div>
    </_Logo>
  );
};

export default Logo;
