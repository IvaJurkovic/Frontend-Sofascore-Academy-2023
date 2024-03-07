import { useContext } from "react";
import { styled } from "styled-components";
import AppContext from "../Context/context";

const QuestionAndNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 120px;
  font-family: "Raleway";
  font-size: 1.8rem;
  caret-color: transparent;
  color: rgb(57, 62, 70);
`;

const QuestionNumber = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 5px;
  caret-color: transparent;
`;

const QuestionContainer = styled.div`
  display: flex;
  caret-color: transparent;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  color: rgb(57, 62, 70);
  background-color: rgba(88, 88, 88, 0.3);
`;

function QuestionWindow(props: { question: string }) {
  const { questionNumber } = useContext(AppContext);

  return (
    <QuestionAndNumber>
      <QuestionNumber>Question no. {questionNumber}</QuestionNumber>
      <QuestionContainer>{props.question}</QuestionContainer>
    </QuestionAndNumber>
  );
}

export default QuestionWindow;
