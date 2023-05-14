import { Dispatch, SetStateAction, useContext } from "react";
import { styled } from "styled-components";
import AppContext from "../Context/context";

const StyledAnswer = styled.div<{ bgColor: string }>`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 77%;
  width: 100%;
  padding: 2vh;
  font-family: "Raleway";
  font-size: 1.8em;
  box-shadow: 5px 5px 7px rgba(88, 88, 88, 0.7);
  background-color: ${(props) => props.bgColor};
  transition: transform 0.15s linear;
  border-radius: 5px;
  caret-color: transparent;
  &:hover {
    box-shadow: 8px 8px 7px rgba(88, 88, 88, 0.7);
    transform: scale(1.05);
    position: relative;
    z-index: 5;
  }
`;

const PostItPaper = styled.li<{ disable: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${(props) => props.disable};
  height: 100%;
  cursor: pointer;
  caret-color: transparent;
`;

function AnswerWindow(props: {
  answer: string;
  rightAnswer: string;
  setConfirmRightAnswer: Dispatch<SetStateAction<boolean>>;
  setConfirmWrongAnswer: Dispatch<SetStateAction<boolean>>;
  color: string;
}) {
  const { removeAnswer1, removeAnswer2 } = useContext(AppContext);
  let disableEvents = "auto";
  let BGColor = props.color;

  if (removeAnswer1 === props.answer || removeAnswer2 === props.answer) {
    disableEvents = "none";
    BGColor = "#5858584d";
  }

  const handleAnswer = () => {
    if (props.answer === props.rightAnswer) {
      props.setConfirmRightAnswer(true);
    } else {
      props.setConfirmWrongAnswer(true);
    }
  };

  return (
    <>
      <PostItPaper disable={disableEvents}>
        <StyledAnswer bgColor={BGColor} onClick={handleAnswer}>
          <p>{decodeURIComponent(props.answer || "")}</p>
        </StyledAnswer>
      </PostItPaper>
    </>
  );
}

export default AnswerWindow;
