import { PopUpBackground } from "../../PopUps/Components/PopUpBackground";
import { PopUpContainer } from "../../PopUps/Components/PopUpContainer";
import { IoClose } from "react-icons/io5";

function GroupHelpPopup(props: { answer: string; closePopup: any }) {
  return (
    <>
      <PopUpBackground>
        <PopUpContainer>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <IoClose onClick={() => props.closePopup(false)} />
          </div>
          <h3 style={{ fontFamily: "Raleway", marginBottom: "5px" }}>
            GROUP HELP!
          </h3>
          <div style={{ fontFamily: "Raleway" }}>
            The answer that the group thinks is right is:
          </div>
          <div
            style={{
              fontFamily: "Raleway",
              marginBottom: "8px",
              marginTop: "8px",
              textDecoration: "underline",
            }}
          >
            {decodeURIComponent(props.answer)}
          </div>
        </PopUpContainer>
      </PopUpBackground>
    </>
  );
}

export default GroupHelpPopup;
