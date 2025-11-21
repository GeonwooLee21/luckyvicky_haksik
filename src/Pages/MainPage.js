// FE1
import styled from "styled-components";
import CafeteriaMain from "./CafeteriaMain";

export default function MainPage() {
  return (
    <Wrapper>
      <Title>오늘의 혼잡도</Title>

      <CardContainer>
        <CafeteriaMain name="공식당" status="보통" />
        <CafeteriaMain name="첨성관" status="여유" />
        <CafeteriaMain name="감골식당" status="혼잡" />
      </CardContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
