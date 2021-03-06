import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  line-height: 1.5;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  background: ${(props) => (props.newBestScore ? "green" : "#000")};
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;
