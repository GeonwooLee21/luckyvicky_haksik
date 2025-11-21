// FE1
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrap>
      <Title>럭키비키 학식맵</Title>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  width: 100%;
  padding: 20px;
  background: white;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;