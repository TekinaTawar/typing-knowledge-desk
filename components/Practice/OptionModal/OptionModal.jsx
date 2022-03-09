import { useContext } from "react";
import { Button } from "components/Shared";
import { RadioButton, RadioButton2 } from "Shared/Radio/Radio.styles";
import PracticeContext from "context/PracticeContext";

import * as S from "./OptionModal.styles";
const OptionModal = ({ onClose }) => {
  const {
    modalShow,
    setModalShow,

    name,
    setName,
    time,
    setTime,
    wordLimit,
    setWordLimit,
    highlight,
    setHighlight,
    backspace,
    setBackspace,

    setTimer,
  } = useContext(PracticeContext);

  const startPractice = () => {
    setTimer({ minutes: time, seconds: 0 });
    setModalShow(!modalShow);
  };

  return (
    <S.OptionModal onClose={onClose}>
      <h3 className="title">Select Your Practice Option</h3>

      <S.Input name="User Name" value={name} setValue={setName} />

      <S.TimeInMinutes>
        <h4 className="groupLabel">Time in Minutes</h4>
        <RadioButton value="1" name="time" option={time} setOption={setTime} />
        <RadioButton value="2" name="time" option={time} setOption={setTime} />
        <RadioButton value="5" name="time" option={time} setOption={setTime} />
        <RadioButton value="10" name="time" option={time} setOption={setTime} />
        <RadioButton value="15" name="time" option={time} setOption={setTime} />
        <S.Input name="Custom" value={time} setValue={setTime} />
      </S.TimeInMinutes>

      <S.SetWordLimit>
        <h4 className="groupLabel">Set word limit</h4>
        <RadioButton2
          value="Disabled"
          name="Word Limit"
          option={wordLimit.setable === false && "Disabled"}
          setOption={() => {
            setWordLimit({
              setable: false,
              wordLimit: "",
            });
          }}
        />
        <S.Input
          name="Word Limit"
          value={wordLimit.wordLimit}
          setValue={(e) =>
            setWordLimit({
              setable: true,
              wordLimit: e,
            })
          }
        />
      </S.SetWordLimit>

      <S.HighlightWord>
        <h4 className="groupLabel">Highlight</h4>
        <RadioButton2
          value="Enable"
          name="highlight"
          option={highlight}
          setOption={setHighlight}
        />
        <RadioButton2
          value="Disable"
          name="highlight"
          option={highlight}
          setOption={setHighlight}
        />
      </S.HighlightWord>

      <S.Backspace>
        <h4 className="groupLabel">Backspace</h4>
        <RadioButton2
          value="USE"
          name="backspace"
          option={backspace}
          setOption={(e) => {
            console.log(e);
            setBackspace(e);
          }}
        />
        <RadioButton2
          value="NOT USE"
          name="backspace"
          option={backspace}
          setOption={setBackspace}
        />
      </S.Backspace>

      <Button onClick={startPractice} btnStyle="yellow">
        Start Practice
      </Button>
    </S.OptionModal>
  );
};

export default OptionModal;
