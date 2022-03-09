import { useState } from "react";
import PracticeContext from "context/PracticeContext";

import Main from "./Main/Main";
import OptionModal from "./OptionModal/OptionModal";

const Practice = () => {
  const [modalShow, setModalShow] = useState(true);

  const [name, setName] = useState("Guest");
  const [time, setTime] = useState(1);
  const [wordLimit, setWordLimit] = useState({ setable: false, wordLimit: "" });
  const [highlight, setHighlight] = useState("Enable");
  const [backspace, setBackspace] = useState("USE");

  const [timer, setTimer] = useState({ minutes: time , seconds: 0 });

  return (
    <>
      <PracticeContext.Provider
        value={{
          modalShow,
          setModalShow,

          time,
          setTime,
          name,
          setName,
          wordLimit,
          setWordLimit,
          highlight,
          setHighlight,
          backspace,
          setBackspace,

          timer,
          setTimer,
        }}
      >
        {modalShow && <OptionModal/>}
        <Main />
      </PracticeContext.Provider>
    </>
  );
};

export default Practice;
