import { useContext, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";
import { BsHeartHalf, BsPeopleFill } from "react-icons/bs";
import { styled } from "styled-components";
import GroupHelpPopup from "./PopUps/Lifelines/GroupHelpPopup";
import FriendHelpPopup from "./PopUps/Lifelines/FriendHelpPopup";
import { Link } from "react-router-dom";
import AppContext from "../Context/context";

const LifelinesMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  caret-color: transparent;
  width: 10%;
`;

const Icon = styled.div<{ disable: string; colorFont: string }>`
  color: ${(props) => props.colorFont};
  pointer-events: ${(props) => props.disable};
  font-size: 30px;
  transition: 0.3s;
  cursor: pointer;
  caret-color: transparent;
  &:hover {
    transform: scale(1.25);
    transition: 0.3s;
    color: rgba(88, 88, 88, 0.7);
  }
`;

function LifelinesWindow(props: { answers: string[]; rightAnswer: string }) {
  const [groupHelpPopUp, setGroupHelpPopUp] = useState(false);
  const [friendHelpPopUp, setFriendHelpPopUp] = useState(false);
  const {
    disable5050,
    disableFriend,
    disableGroup,
    removeAnswer1,
    removeAnswer2,
    setProperty,
  } = useContext(AppContext);
  let noClick5050 = "auto";
  let color5050 = "black";
  let noFriend = "auto";
  let colorNoFriend = "black";
  let noGroup = "auto";
  let colorNoGroup = "black";

  if (disable5050) {
    noClick5050 = "none";
    color5050 = "#585858b3";
  }
  if (disableFriend) {
    noFriend = "none";
    colorNoFriend = "#585858b3";
  }
  if (disableGroup) {
    noGroup = "none";
    colorNoGroup = "#585858b3";
  }

  const giveMeFifty = () => {
    let answer1 = "";
    let answer2 = "";
    do {
      answer1 = props.answers[Math.floor(Math.random() * 4)];
      answer2 = props.answers[Math.floor(Math.random() * 4)];
    } while (
      answer2 === answer1 ||
      answer1 === props.rightAnswer ||
      answer2 === props.rightAnswer
    );

    setProperty("RA1", answer1);
    setProperty("RA2", answer2);
    setProperty("D5050", true);
  };

  const callMyHelper = () => {
    let trueFalse = Math.random();
    let index = Math.floor(Math.random() * 4);

    if (trueFalse > 0.3) {
      return props.rightAnswer;
    } else {
      let friendAnswer = "";
      do {
        friendAnswer = props.answers[index];
      } while (
        props.answers[index] === props.rightAnswer ||
        props.answers[index] === removeAnswer1 ||
        props.answers[index] === removeAnswer2
      );
      return friendAnswer;
    }
  };

  return (
    <LifelinesMenu>
      <Link to={"/"}>
        <Icon disable="auto" colorFont="black">
          <AiFillHome />
        </Icon>
      </Link>
      <Icon disable={noClick5050} colorFont={color5050}>
        <BsHeartHalf onClick={giveMeFifty} />
      </Icon>
      <Icon disable={noFriend} colorFont={colorNoFriend}>
        <CgPhone
          onClick={() => {
            setFriendHelpPopUp(true);
            setProperty("DF", true);
          }}
        />
      </Icon>
      <Icon disable={noGroup} colorFont={colorNoGroup}>
        <BsPeopleFill
          onClick={() => {
            setGroupHelpPopUp(true);
            setProperty("DG", true);
          }}
        />
      </Icon>
      {groupHelpPopUp && (
        <GroupHelpPopup
          answer={callMyHelper()}
          closePopup={setGroupHelpPopUp}
        />
      )}
      {friendHelpPopUp && (
        <FriendHelpPopup
          answer={callMyHelper()}
          closePopup={setFriendHelpPopUp}
        />
      )}
    </LifelinesMenu>
  );
}

export default LifelinesWindow;
