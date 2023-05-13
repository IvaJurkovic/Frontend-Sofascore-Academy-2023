import { Button } from "../Buttons/Button";
import { Link } from "react-router-dom";
import { PopUpBackground } from "./Components/PopUpBackground";
import { PopUpContainer } from "./Components/PopUpContainer";

function RightAnswerPopUp() {
  let questionNumberStr = localStorage.getItem("questionNumber");
  let questionNumber = Number(questionNumberStr);
  questionNumber++;

  const handleRightAnswer = () => {
    if (questionNumber === 4) {
      localStorage.setItem("questionNumber", "1");
      window.location.href = "/congratulations";
    } else {
      localStorage.setItem("questionNumber", questionNumber.toString());
      window.location.href = "/questions";
    }
  };

  const resetLocalStorage = () => {
    localStorage.setItem("questionNumber", "1");
  };

  return (
    <div>
      <PopUpBackground>
        <PopUpContainer>
          <h3 style={{ fontFamily: "Raleway", marginBottom: "5px" }}>
            GOOD JOB!
          </h3>
          <div style={{ fontFamily: "Raleway" }}>
            The answer you selected was the right one!
          </div>
          <div style={{ fontFamily: "Raleway" }}>
            You can continue playing the game
          </div>
          <div style={{ fontFamily: "Raleway", marginBottom: "8px" }}>
            or go back to the home page:
          </div>
          <div style={{display: 'flex', width: '100%', flexDirection:'row', justifyContent: 'space-evenly'}}>
            <Link to="/">
              <Button onClick={resetLocalStorage}>QUIT</Button>
            </Link>
            <Button onClick={handleRightAnswer}>NEXT</Button>
          </div>
        </PopUpContainer>
      </PopUpBackground>
    </div>
  );
}

export default RightAnswerPopUp;
