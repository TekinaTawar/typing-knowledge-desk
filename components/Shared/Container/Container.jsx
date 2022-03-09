import styled from "styled-components";

const _Container = styled.div`
  width: 100%;
  & > .wrapper {
    width: 95%;
    max-width: var(--layout-width);
    margin: 0 auto;
    height: 100%;
  }
`;

// this component creates div that takes a "max width" with a "background Color" of the page and then keeps the content in a specified
const Container = ({ children, className }) => {
  return (
    <_Container className={className}>
      <div className="wrapper">{children}</div>
    </_Container>
  );
};

export default Container;
