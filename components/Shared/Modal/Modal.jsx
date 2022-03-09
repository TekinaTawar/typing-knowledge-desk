import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const _Modal = styled.div`
  background-color: white;
  border-radius: 10px;
  font-size: 1.6rem;
  padding: 40px 30px;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & .closeIcon {
    color: hsla(0, 0%, 60%);
    position: absolute;
    z-index: 99;
    top: 10px;
    right: 10px;
    height: 3rem;
    width: 3rem;

    &:hover {
      cursor: pointer;
      color: crimson;
    }
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: hsla(0, 0%, 10%, 0.8);
`;
const Modal = ({ className, children, onClose }) => {
  return (
    <>
      <ModalBackground onClick={onClose} />
      <_Modal className={className}>
        <IoMdClose className="closeIcon" onClick={onClose} />
        {children}
      </_Modal>
    </>
  );
};

export default Modal;
