// src/Components/lastWeekText.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getLastWeekStatus } from "../Api";

const LEVEL_LABELS = {
  busy: "혼잡했어요😡🥵",
  normal: "보통 정도로 혼잡했어요🙂",
  relaxed: "여유로웠어요🥳🎉",
};

function LastWeekText({ cafeteria }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!cafeteria) return;

    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const data = await getLastWeekStatus(cafeteria);
        if (!cancelled) setStatus(data);
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => (cancelled = true);
  }, [cafeteria]);

  if (loading) return <Text>지난주 데이터를 불러오는 중입니다…</Text>;
  if (error || !status) return <Text>지난주 데이터가 없어요.</Text>;

  const label = LEVEL_LABELS[status.level] || "보통이었어요";
  return <Text>일주일 전 이 시간대에는 {label}</Text>;
}

export default LastWeekText;

const Text = styled.p`
  margin-top: 16px;
  font-size: 18px;
  text-align: center;
`;
