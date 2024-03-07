import { useContext } from "react";
import { PopUpBackground } from "../Components/PopUpBackground";
import { PopUpContainer } from "../Components/PopUpContainer";
import { Button } from "../../Buttons/Button";
import { Link } from "react-router-dom";
import AppContext from "../../../Context/context";

function WrongAnswerPopUp() {
  const { setProperty } = useContext(AppContext);

  const resetLocalStorage = () => {
    setProperty("QN", 1);
  };

  return (
    <>
      <PopUpBackground>
        <PopUpContainer>
          <h3 style={{ fontFamily: "Raleway", marginBottom: "5px" }}>
            GAME OVER!
          </h3>
          <div style={{ fontFamily: "Raleway" }}>
            The answer you selected was the wrong one!
          </div>
          <div style={{ fontFamily: "Raleway", marginBottom: "8px" }}>
            Return to the home screen and try again:
          </div>
          <Link to="/">
            <Button onClick={resetLocalStorage}>QUIT</Button>
          </Link>
        </PopUpContainer>
      </PopUpBackground>
    </>
  );
}

export default WrongAnswerPopUp;
