import React from "react";
import { Link } from "react-router-dom";
import { HomeButton } from "./Components/Buttons/Button";
import { styled, keyframes } from "styled-components";
import { TitleLetters } from "./Components/Typography/TitleLetters";
import { PunchlineLetters } from "./Components/Typography/PunchlineLetters";

const AnimateBG = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    #6a4c93 0%,
    #1982c4 33%,
    #8ac926 66%,
    #ffca3a 100%
  );
  animation-name: ${AnimateBG};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;


function Home() {
  return (
    <Background>
      <div className="center">
        <TitleLetters>Welcome to PubQuizWiz!</TitleLetters>
        <PunchlineLetters>
          Are you ready to take on the challenge?
        </PunchlineLetters>
        <Link to={"/questions"}>
          <HomeButton onClick={undefined}>OH YEAH!</HomeButton>
        </Link>
      </div>
    </Background>
  );
}

export default Home;
