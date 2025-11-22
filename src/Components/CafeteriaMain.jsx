// src/Components/CafeteriaMain.jsx
import styled from "styled-components";
import { Link } from "react-router-dom";

function CafeteriaMain({ title, message }) {
  return (
    <Wrapper>
      <TopBox>{title}</TopBox>
      <MessageBox>{message}</MessageBox>

      <GraphBox>
        투표해주시면
        <br />
        시간대별 혼잡도 그래프를
        <br />
        확인하실 수 있어요!
      </GraphBox>

      <BottomRow>
        <BackButton to="/">첫 화면으로 돌아가기</BackButton>
        <VoteButton>투표하기</VoteButton>
      </BottomRow>
    </Wrapper>
  );
}

export default CafeteriaMain;

// ---- styled-components ----
const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const TopBox = styled.div`
  width: 60%;
  padding: 20px 0;
  border: 3px solid #003048;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

const MessageBox = styled.div`
  width: 70%;
  padding: 18px 0;
  border: 3px solid #003048;
  text-align: center;
  font-size: 24px;
`;

const GraphBox = styled.div`
  width: 80%;
  height: 380px;
  border: 4px solid #003048;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
`;

const BottomRow = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const BackButton = styled(Link)`
  width: 230px;
  padding: 14px 0;
  border: 2px solid #003048;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: #f0f8ff;
  }
`;

const VoteButton = styled.button`
  width: 230px;
  padding: 14px 0;
  border: 2px solid #003048;
  background-color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f0f8ff;
  }
`;
