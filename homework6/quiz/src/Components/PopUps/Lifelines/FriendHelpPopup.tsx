import { PopUpBackground } from "../Components/PopUpBackground";
import { PopUpContainer } from "../Components/PopUpContainer";
import { IoClose } from "react-icons/io5";

function FriendHelpPopup(props: { answer: string; closePopup: any }) {
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
            FRIEND HELP!
          </h3>
          <div style={{ fontFamily: "Raleway" }}>
            You called your friend and he/she suggested that it's:
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

export default FriendHelpPopup;
