import { useEffect, useState } from "react";
import AnswerWindow from "./Components/AnswerWindow";
import QuestionWindow from "./Components/QuestionWindow";
import RightAnswerPopUp from "./Components/PopUps/Confirmation/RightAnswerPopUp";
import WrongAnswerPopUp from "./Components/PopUps/Confirmation/WrongAnswerPopUp";
import { styled } from "styled-components";
import "./css/general.css";
import LifelinesBar from "./Components/LifelinesWindow";
import AppContext from "./Context/context";

const StyledUL = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100%;
  width: 80%;
`;

const UserEngageWindow = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 120px);
`;

function Questions() {
  const baseURL =
    "https://opentdb.com/api.php?amount=1&type=multiple&encode=url3986";
  const [answers, setAnswers] = useState<string[]>([]);
  const [rightAnswer, setRightAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [confirmRightAnswer, setConfirmRightAnswer] = useState(false);
  const [confirmWrongAnswer, setConfirmWrongAnswer] = useState(false);

  const [questionNumber, setQuestionNumber] = useState(1);
  const [disable5050, setDisable5050] = useState(false);
  const [disableFriend, setDisableFriend] = useState(false);
  const [disableGroup, setDisableGroup] = useState(false);
  const [removeAnswer1, setRemoveAnswer1] = useState("");
  const [removeAnswer2, setRemoveAnswer2] = useState("");
  const setProperty = (property: string, value: string | boolean | number) => {
    if (property === "QN") setQuestionNumber(value as number);
    if (property === "D5050") setDisable5050(value as boolean);
    if (property === "DF") setDisableFriend(value as boolean);
    if (property === "DG") setDisableGroup(value as boolean);
    if (property === "RA1") setRemoveAnswer1(value as string);
    if (property === "RA2") setRemoveAnswer2(value as string);
  };

  useEffect(() => {
    let help = [];
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        help = data.results[0].incorrect_answers;
        help = [...help, data.results[0].correct_answer];
        setQuestion(decodeURIComponent(data.results[0].question));
        setAnswers(help.sort(() => Math.random() - 0.5));
        setRightAnswer(data.results[0].correct_answer);
      });
  }, [questionNumber]);


  return (
    <>
      <AppContext.Provider
        value={{
          questionNumber,
          disable5050,
          disableFriend,
          disableGroup,
          removeAnswer1,
          removeAnswer2,
          setProperty,
        }}
      >
        <QuestionWindow question={question} />
        <UserEngageWindow>
          <LifelinesBar answers={answers} rightAnswer={rightAnswer} />
          <StyledUL>
            <div
              style={{
                height: "100%",
                width: "48%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignContent: "center",
              }}
            >
              <AnswerWindow
                answer={answers[0]}
                rightAnswer={rightAnswer}
                setConfirmRightAnswer={setConfirmRightAnswer}
                setConfirmWrongAnswer={setConfirmWrongAnswer}
                color="#6a4c93"
              />
              <AnswerWindow
                answer={answers[1]}
                rightAnswer={rightAnswer}
                setConfirmRightAnswer={setConfirmRightAnswer}
                setConfirmWrongAnswer={setConfirmWrongAnswer}
                color="#1982c4"
              />
            </div>
            <div
              style={{
                height: "100%",
                width: "48%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignContent: "center",
              }}
            >
              <AnswerWindow
                answer={answers[2]}
                rightAnswer={rightAnswer}
                setConfirmRightAnswer={setConfirmRightAnswer}
                setConfirmWrongAnswer={setConfirmWrongAnswer}
                color="#8ac926"
              />
              <AnswerWindow
                answer={answers[3]}
                rightAnswer={rightAnswer}
                setConfirmRightAnswer={setConfirmRightAnswer}
                setConfirmWrongAnswer={setConfirmWrongAnswer}
                color="#ffca3a"
              />
            </div>
          </StyledUL>
        </UserEngageWindow>
        {confirmRightAnswer && (
          <RightAnswerPopUp closePopup={setConfirmRightAnswer} />
        )}
        {confirmWrongAnswer && <WrongAnswerPopUp />}
      </AppContext.Provider>
    </>
  );
}

export default Questions;
