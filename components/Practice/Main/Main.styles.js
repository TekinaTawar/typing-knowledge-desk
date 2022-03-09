import styled from "styled-components";
import { Container } from "components/Shared";

export const Main = styled(Container)`
  --secondary: #9ed072;
  --wrong: #fc5d7c;

  background-color: #2c2e34;
  height: 80vh;
  font-size: 2.2rem;
  color: var(--primary);
  .wrapper {
    /* background-color: pink; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* justify-content: space-between; */
    /* align-content: space-around; */
  }
`;

export const HiUser = styled.p`
  align-self: end;
`;

export const Timer = styled.strong`
  justify-self: center;
  align-self: flex-end;
  color: var(--secondary);
  line-height: 5.2rem;
  font-size: 5.4rem;
  font-weight: 500;
`;

export const Settings = styled.p`
  justify-self: end;
  align-self: end;
  display: flex;
  align-items: center;
  column-gap: 10px;

  &:hover {
    cursor: pointer;
  }

  &:hover > .gear {
    cursor: pointer;
    color: var(--secondary);
    transform: rotate(90deg);
  }
  .gear {
    height: 2.8rem;
    width: 2.8rem;
    transition: transform 0.5s linear;
  }
`;

export const Stats = styled.div`
  grid-column: span 3;
  grid-row: span 2;
  /* justify-self: center ; */
  margin: auto;
  width: calc(55ch + 100px + 10px);
  display: flex;
  justify-content: space-between;

  & > div > label {
    font-size: 1.8rem;
  }

  & > div > span {
    color: var(--secondary);
    font-weight: 500;
    font-size: 2.4rem;
  }
`;

export const TextBox = styled.div`
  grid-column: span 3;
  grid-row: span 2;
  align-self: start;
  justify-self: center;

  padding: 40px 50px;
  border: 4px solid var(--primary);
  border-radius: 10px;
  display: grid;
  row-gap: 40px;

  & div.typingText {
    line-height: 3.2ch;
    max-width: 55ch;
    /* max-height: calc(3 * 3.2ch); */
    /* overflow: hidden; */

    & .typed {
      color: white;
    }

    & .lastTyped{
      position: relative;

      &::after {
        content: "";
        height: 120%;
        width: 4px;
        background-color: #ef8a70;
        position: absolute;
        border-radius: 2px;
        z-index: 0;
        animation: blink .3s linear infinite alternate;
      }

      @keyframes blink {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }

    & span.wrong {
      color: var(--wrong);
      border-bottom: 4px solid;
    }
  }

  .userInput {
    display: inline-block;
    width: 100%;
    height: 5rem;
    border: 4px solid var(--secondary);
    border-radius: 5px;
    padding: 0px 10px;
    font-size: 2rem;
    background-color: hsl(0, 0%, 20%);
    font-weight: 500;
    color: hsl(0, 0%, 20%);

    &:focus.wrong {
      outline: 4px solid var(--wrong);
      background-color: hsl(348, 96%, 95%);
      color: black;
      border: 0px;
    }
    &:focus {
      background-color: white;
    }
  }
`;

/*
Todo:
hover settings green.
make text area go up a little

*/
