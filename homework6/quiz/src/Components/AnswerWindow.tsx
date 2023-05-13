import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";

const StyledAnswer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 40vw;
  padding: 1em;
  font-family: 'Raleway';
  font-size: 1.8em;
  box-shadow: 5px 5px 7px rgba(88, 88, 88, 0.7);
  transition: transform .15s linear;
  border-radius: 5px;
  &:hover {
    box-shadow: 10px 10px 7px rgba(88, 88, 88, 0.7);
    transform: scale(1.1);
    position: relative;
    z-index: 5;
  }
`;

const PostItPaper = styled.li`
  display: flex;
  padding: 1em;
`;

function AnswerWindow(props: {
  answer: string;
  rightAnswer: string;
  setConfirmRightAnswer: Dispatch<SetStateAction<boolean>>;
  setConfirmWrongAnswer: Dispatch<SetStateAction<boolean>>;
  color: string;
})
{
  const handleAnswer = () => {
    if (props.answer === props.rightAnswer) {
      props.setConfirmRightAnswer(true);
    } else {
      props.setConfirmWrongAnswer(true);
    }
  };

  return (
    <>
      <PostItPaper>
        <StyledAnswer style={{background: props.color}} onClick={handleAnswer}>
          <p>{decodeURIComponent(props.answer || "")}</p>
        </StyledAnswer>
      </PostItPaper>
    </>
  );
}

export default AnswerWindow;
