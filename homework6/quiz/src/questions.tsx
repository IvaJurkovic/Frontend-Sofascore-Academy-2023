import React, { useEffect, useState } from "react";
import AnswerWindow from "./Components/AnswerWindow";
import QuestionWindow from "./Components/QuestionWindow";
import RightAnswerPopUp from "./Components/PopUps/RightAnswerPopUp";
import WrongAnswerPopUp from "./Components/PopUps/WrongAnswerPopUp";
import { styled } from "styled-components";
import "./css/general.css"

const StyledUL = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-direction: row;
  height: calc(100% - 75px);
`;

function Questions() {
  const baseURL =
    "https://opentdb.com/api.php?amount=1&type=multiple&encode=url3986";
  const [answers, setAnswers] = useState<string[]>([]);
  const [rightAnswer, setRightAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [confirmRightAnswer, setConfirmRightAnswer] = useState(false);
  const [confirmWrongAnswer, setConfirmWrongAnswer] = useState(false);

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
  }, []);

  return (
    <>
      <QuestionWindow question={question} />
      <StyledUL>
        <div>
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
        <div>
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
      {confirmRightAnswer && <RightAnswerPopUp />}
      {confirmWrongAnswer && <WrongAnswerPopUp />}
    </>
  );
}

export default Questions;
