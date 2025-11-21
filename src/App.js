import styled from "styled-components";

function App() {
  return (
    <Container>
      <Card>
        <Left>공식당</Left>
        <Right>🥵</Right>
      </Card>

      <Card>
        <Left>복지관</Left>
        <Right>😐</Right>
      </Card>

      <Card>
        <Left>감꽃식당</Left>
        <Right>🥳</Right>
      </Card>
    </Container>
  );
}

export default App;

// -------- styled-components ---------

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: #ffffff;
`;

const Card = styled.div`
  width: 500px;
  height: 90px;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

const Right = styled.div`
  width: 150px;
  text-align: center;
  font-size: 45px;
`;
