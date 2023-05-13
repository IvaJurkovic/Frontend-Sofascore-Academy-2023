import { keyframes, styled } from "styled-components";
import { CongratsLetters } from "./Components/Typography/PunchlineLetters";
import { CongratsTitleLetters } from "./Components/Typography/TitleLetters";

const FallingConfetti = keyframes`
  from {
    opacity: 0;
  }  
  75% {
    opacity: 1;
  }
  to {
    transform: translateY(90vh);
  }
`;

const Confetti = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ChildConfetti = styled.div<{
  left: number;
  transform: number;
  animationDelay: number;
  animationDuration: number;
}>`
  position: absolute;
  width: 16px;
  height: 32px;
  background: #ffd300;
  top: 0;
  opacity: 0;

  left: ${(props) => props.left}%;
  animation: ${FallingConfetti} 4s infinite ease-out;
  transform: rotate(${(props) => props.transform}deg);
  animation-delay: ${(props) => props.animationDelay}ms;
  animation-duration: ${(props) => props.animationDuration}ms;

  &:nth-child(odd) {
    background: #17d3ff;
  }
  &:nth-child(even) {
    z-index: 1;
  }
  &:nth-child(4n) {
    width: 10px;
    height: 24px;
    animation-duration: 4s;
  }
  &:nth-child(3n) {
    width: 6px;
    height: 20px;
    animation-duration: 5s;
    animation-delay: 2s;
  }
  &:nth-child(4n-7) {
    background: #ff4e91;
  }
`;

function randomNumber(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function WinningScreen() {
  return (
    <Confetti>
      {(() => {
        const arr = [];
        for (let i = 0; i < 16; i++) {
          arr.push(
            <ChildConfetti
              left={i * 7}
              transform={randomNumber(-80, 80)}
              animationDelay={randomNumber(0, 1000)}
              animationDuration={randomNumber(1000 * 1.2, 1000 * 2.4)}
            />
          );
        }
        return arr;
      })()}
      <div className="center">
        <CongratsTitleLetters>YOU WON!</CongratsTitleLetters>
        <CongratsLetters>
          You are a true quiz wiz after all...
        </CongratsLetters>
        <CongratsLetters style={{ fontSize: "20px" }}>
          Kudos to you my dear sir/lady!
        </CongratsLetters>
      </div>
    </Confetti>
  );
}

export default WinningScreen;
