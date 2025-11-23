// src/Components/VotePage.jsx
// FE2: 투표 화면 + 혼잡도/대기시간 선택 + 완료 모달 + 상세페이지로 돌아가기

import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

function VotePage() {
  const { name } = useParams(); // Gongstaurant / Cheomseong / Gamggoteria
  const navigate = useNavigate();

  const [level, setLevel] = useState(null);      // "relaxed" | "normal" | "busy"
  const [waitTime, setWaitTime] = useState(null); // 예: "바로 입장", "5분" 등
  const [showModal, setShowModal] = useState(false);

  // 혼잡도별 대기시간 선택지
  const waitOptionsMap = {
    relaxed: ["바로 입장", "5분"],
    normal: ["10분", "15분"],
    busy: ["20분", "20분 이상"],
  };

  const waitOptions = level ? waitOptionsMap[level] : [];

  const handleLevelClick = (selected) => {
    setLevel(selected);
    setWaitTime(null); // 혼잡도를 바꾸면 대기시간 선택 다시 초기화
  };

  const handleWaitClick = (selected) => {
    setWaitTime(selected);
  };

  const handleSubmit = () => {
    if (!level || !waitTime) return;

    console.log("사용자 선택:", { level, waitTime });
    // TODO: 나중에 여기서 postVote, 예측 대기시간 API 호출

    setShowModal(true);
  };

  const handleModalClose = () => {
    // 모달 닫으면 식당 상세페이지로 이동 + "투표 완료" 정보 전달
    navigate(`/cafeteria/${name}`, {
      state: { fromVote: true },
    });
  };

  const isSubmitDisabled = !level || !waitTime;

  return (
    <VoteWrapper>
      {/* 혼잡도 선택 영역 */}
      <LevelRow>
        <LevelBox
          selected={level === "busy"}
          onClick={() => handleLevelClick("busy")}
        >
          <LevelLabel>혼잡</LevelLabel>
          <LevelSquare>{level === "busy" ? "V" : ""}</LevelSquare>
        </LevelBox>

        <LevelBox
          selected={level === "normal"}
          onClick={() => handleLevelClick("normal")}
        >
          <LevelLabel>보통</LevelLabel>
          <LevelSquare>{level === "normal" ? "V" : ""}</LevelSquare>
        </LevelBox>

        <LevelBox
          selected={level === "relaxed"}
          onClick={() => handleLevelClick("relaxed")}
        >
          <LevelLabel>여유</LevelLabel>
          <LevelSquare>{level === "relaxed" ? "V" : ""}</LevelSquare>
        </LevelBox>
      </LevelRow>

      {/* 대기시간 선택 타이틀 */}
      <TimeTitleBox>대기시간선택</TimeTitleBox>

      {/* 대기시간 선택 버튼들 */}
      {waitOptions.length > 0 && (
        <>
          {waitOptions.map((opt) => (
            <TimeOptionBox
              key={opt}
              selected={waitTime === opt}
              onClick={() => handleWaitClick(opt)}
            >
              {opt}
            </TimeOptionBox>
          ))}
        </>
      )}

      {/* 투표하기 버튼 */}
      <SubmitButton
        disabled={isSubmitDisabled}
        onClick={handleSubmit}
      >
        투표하기
      </SubmitButton>

      {/* 투표 완료 모달 */}
      {showModal && (
        <ModalBackdrop>
          <ModalBox>
            <p style={{ fontSize: "24px", marginBottom: "16px" }}>
              투표가 완료되었어요! 👏
            </p>
            <ModalButton onClick={handleModalClose}>확인</ModalButton>
          </ModalBox>
        </ModalBackdrop>
      )}
    </VoteWrapper>
  );
}

export default VotePage;

// ----- styled-components -----

const VoteWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: #ff4fa3;
  text-decoration: underline;
  margin-bottom: 30px;
`;

// 혼잡도 선택 줄
const LevelRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

const LevelBox = styled.div`
  width: 130px;
  height: 170px;
  border: 2px solid #003048;
  background-color: ${({ selected }) => (selected ? "#e0e0e0" : "white")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const LevelLabel = styled.div`
  width: 100%;
  padding: 6px 0;
  border-bottom: 2px solid #003048;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

const LevelSquare = styled.div`
  margin-top: 16px;
  width: 90px;
  height: 90px;
  border: 2px solid #003048;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;

// 대기시간 타이틀 박스
const TimeTitleBox = styled.div`
  width: 80%;
  max-width: 520px;
  padding: 12px 0;
  border: 2px solid #003048;
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
`;

// 대기시간 선택 박스
const TimeOptionBox = styled.button`
  width: 80%;
  max-width: 520px;
  padding: 12px 0;
  border: 2px solid #003048;
  background-color: ${({ selected }) => (selected ? "#e0e0e0" : "white")};
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`;

// 투표하기 버튼
const SubmitButton = styled.button`
  width: 80%;
  max-width: 520px;
  padding: 14px 0;
  border: 2px solid #003048;
  margin-top: 10px;
  font-size: 18px;
  color: ${({ disabled }) => (disabled ? "#999" : "red")};
  background-color: white;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

// 모달 배경
const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 모달 박스
const ModalBox = styled.div`
  width: 420px;
  height: 260px;
  background: white;
  border: 3px solid #003048;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalButton = styled.button`
  margin-top: 12px;
  padding: 10px 26px;
  border: 2px solid #003048;
  background: white;
  cursor: pointer;
`;
