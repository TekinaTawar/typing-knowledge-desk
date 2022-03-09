import * as S from "./Main.styles";
import { BsGearFill } from "react-icons/bs";
import { useEffect, useState, useContext } from "react";

import PracticeContext from "context/PracticeContext";

const Main = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta,  neque aperiam vel aspernatur sequi praesentium asperiores iure eveniet harum, unde incidunt obcaecati quidem exercitationem. Et excepturi sunt doloremque aperiam!";

  const { modalShow, setModalShow, time, name, timer, setTimer } =
    useContext(PracticeContext);

  const grossWpm = "28";
  const netCpm = "28";
  const netWpm = "68";
  const backspace = "8";

  const [userInput, setUserInput] = useState("");
  const [practiceStatus, setPracticeStatus] = useState("NOTSTARTED"); //STARTED, PAUSED, DONE
  const [cursorIndex, setCursorIndex] = useState(-1); //[word, ]

  const formatedTimer = (timer) => {
    if (timer.seconds < 10) {
      return `${timer.minutes} : 0${timer.seconds}`;
    }
    return `${timer.minutes} : ${timer.seconds}`;
  };

  const runTimer = () => {
    const timems = time * 60 * 1000;
    let start = Date.now();

    const IntervalID = setInterval(() => {
      console.log("Interval Running");
      let current = Date.now();
      let elapsed = current - start;
      const remainingTimems = timems - elapsed;

      if (remainingTimems < 0) {
        setPracticeStatus("DONE");
        clearInterval(IntervalID);
        setTimer({
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const remainingMinutes = Math.floor(remainingTimems / 60000);
      const remainingSeconds = Math.floor((remainingTimems % 60000) / 1000);

      setTimer({
        minutes: remainingMinutes,
        seconds: remainingSeconds,
      });
    }, 1000);
  };

  const onUserInputChange = (e) => {
    if (practiceStatus === "NOTSTARTED" || practiceStatus === "DONE") {
      setPracticeStatus("STARTED");
    }
    console.log(e);
    setCursorIndex(cursorIndex + 1);
    setUserInput(e.target.value);
  };

  useEffect(() => {
    if (practiceStatus === "STARTED") {
      runTimer();
    }
  }, [practiceStatus]);

  return (
    <S.Main>
      <S.HiUser>Hi! {name}</S.HiUser>
      <S.Timer> {formatedTimer(timer)}</S.Timer>
      <S.Settings
        onClick={() => {
          setModalShow(!modalShow);
        }}
      >
        <BsGearFill className="gear" />
        Settings
      </S.Settings>
      <S.Stats>
        <div className="grossWpm">
          <label>Gross WPM:</label> <span>{grossWpm}</span>
        </div>
        <div className="netCpm">
          <label>Net CPM:</label> <span>{netCpm}</span>
        </div>
        <div className="netWpm">
          <label>Net WPM:</label> <span>{netWpm}</span>
        </div>
        <div className="backspace">
          <label>Backspace:</label> <span>{backspace}</span>
        </div>
      </S.Stats>
      <S.TextBox>
        <div className="typingText">
          {text.split("").map((letter, index) => {
            let letterStatus = "unTyped";
            if (index < cursorIndex) {
              letterStatus = "typed";
            } else if (index == cursorIndex) {
              letterStatus = "typed lastTyped";
            }
            return (
              <span key={index} className={letterStatus}>
                {letter}
              </span>
            );
          })}
        </div>
        <input
          type="text"
          className="userInput"
          placeholder="Type Here To Start"
          spellCheck="false"
          value={userInput}
          onChange={onUserInputChange}
        />
      </S.TextBox>
    </S.Main>
  );
};

export default Main;
