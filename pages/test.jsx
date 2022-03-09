import styled from "styled-components";

<<<<<<< HEAD
=======

>>>>>>> bdd8879d3549e8a0e0580b9f1f0805329dcbd081
const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  background-color: #2c2e34;
  height: 80vh;

  & > .vl {
    border: 0.5px solid lightgray;
    height: 100%;
    position: absolute;
  }

  & > .hl {
    border: 0.5px solid lightgray;
    width: 100%;
    position: absolute;
  }
`;

const Test = () => {
<<<<<<< HEAD
=======

>>>>>>> bdd8879d3549e8a0e0580b9f1f0805329dcbd081
  return (
    <Container>
      {/* <div className="vl"></div> */}
      {/* <div className="hl"></div> */}
<<<<<<< HEAD
=======

      <Modal></Modal>
>>>>>>> bdd8879d3549e8a0e0580b9f1f0805329dcbd081
    </Container>
  );
};

Test.getLayout = (page) => page;

export default Test;
