import { styled } from "styled-components";


const QuestionAndNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2%;
  font-family: 'Raleway';
  font-size: 2rem;
  color: rgb(57,62,70);
`

const QuestionNumber = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 5px;
`

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  color: rgb(57,62,70);
  background-color: rgba(88, 88, 88, 0.3);
`

function QuestionWindow(props: { question: string}) {
  let questionNumber = localStorage.getItem("questionNumber")

  return (
    <QuestionAndNumber> 
      <QuestionNumber>Question no. {questionNumber}</QuestionNumber>
      <QuestionContainer>{props.question}</QuestionContainer>
    </QuestionAndNumber>
  );
}

export default QuestionWindow;
