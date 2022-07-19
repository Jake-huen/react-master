import styled, { keyframes } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    // <Wrapper>
    //   <Box>
    //     <Emoji>😊</Emoji>
    //   </Box>
    //   <Title>Hello</Title>
    // </Wrapper>
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/react-master" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform:rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span``;

const Box = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    font-size: 36px;
    &:hover {
      font-size: 100px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
