// FE1
import styled from "styled-components";

export default function CafeteriaMain({ name, status }) {
  return (
    <Card>
      <h2>{name}</h2>
      <Status status={status}>{status}</Status>
    </Card>
  );
}

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Status = styled.div`
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  background: ${({ status, theme }) =>
    status === "혼잡" ? theme.colors.crowded :
    status === "보통" ? theme.colors.normal :
    theme.colors.free};
  color: white;
`;
