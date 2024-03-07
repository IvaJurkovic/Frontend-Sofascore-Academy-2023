import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Raleway";
  padding: 8px 20px;
  border-radius: 12px;
  border: none;
  background-color: rgb(248, 181, 0);
  color: rgb(57, 62, 70);
  font-weight: 600;
  font-size: 1em;
  caret-color: transparent;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background-color: rgba(248, 181, 0, 0.5);
  }
`;

export const HomeButton = styled(StyledButton)`
  font-size: 1.5em;
  margin: 10px 0 0 48px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.3s;
  }
`;

export const WinButton = styled(StyledButton)`
  font-size: 1.5em;
  margin: 10px 0 0 0;
  background-color: rgba(66, 66, 66, 0.3);
  color: #ffffff;
  &:hover {
    background-color: rgba(51, 51, 51, 0.5);
    transition: 0.3s;
  }
`;

export const Button = (props: { children: string; onClick: any }) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};
