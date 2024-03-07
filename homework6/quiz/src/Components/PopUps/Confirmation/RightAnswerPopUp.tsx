import { Button } from "../../Buttons/Button";
import { Link } from "react-router-dom";
import { PopUpBackground } from "../Components/PopUpBackground";
import { PopUpContainer } from "../Components/PopUpContainer";
import { useContext } from "react";
import AppContext from "../../../Context/context";

function RightAnswerPopUp(props: { closePopup: any }) {
  const { questionNumber, setProperty } = useContext(AppContext);

  const handleRightAnswer = () => {
    if (questionNumber === 15) {
      window.location.href = "/congratulations";
    } else {
      setProperty("QN", questionNumber + 1);
      props.closePopup(false);
    }
  };

  const resetContext = () => {
    setProperty("QN", 1);
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
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Link to="/">
              <Button onClick={resetContext}>QUIT</Button>
            </Link>
            <Button onClick={handleRightAnswer}>NEXT</Button>
          </div>
        </PopUpContainer>
      </PopUpBackground>
    </div>
  );
}

export default RightAnswerPopUp;
