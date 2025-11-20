// src/App.js
import './App.css';

const STATUS = {
  BUSY: '혼잡',
  NORMAL: '보통',
  RELAXED: '여유',
};

const cafeterias = [
  {
    id: 'official',
    name: '공식당',
    status: STATUS.BUSY,
    waitTime: '대기 약 15분',
    location: '학생회관 1층',
    lastUpdated: '오늘 12:10 기준',
  },
  {
    id: 'dorm',
    name: '기숙사 식당',
    status: STATUS.NORMAL,
    waitTime: '대기 약 5분',
    location: '기숙사 B동 지하',
    lastUpdated: '오늘 12:05 기준',
  },
  {
    id: 'second',
    name: '제2 식당',
    status: STATUS.RELAXED,
    waitTime: '대기 거의 없음',
    location: '공대 7호관 옆',
    lastUpdated: '오늘 12:00 기준',
  },
];

function getStatusClass(status) {
  if (status === STATUS.BUSY) return 'badge badge-busy';
  if (status === STATUS.NORMAL) return 'badge badge-normal';
  return 'badge badge-relaxed';
}

function CafeteriaCard({ cafeteria, onClick }) {
  return (
    <button className="cafeteria-card" onClick={() => onClick(cafeteria)}>
      <div className="cafeteria-card-header">
        <h2 className="cafeteria-name">{cafeteria.name}</h2>
        <span className={getStatusClass(cafeteria.status)}>
          {cafeteria.status}
        </span>
      </div>

      <p className="cafeteria-location">{cafeteria.location}</p>
      <p className="cafeteria-wait">{cafeteria.waitTime}</p>
      <p className="cafeteria-updated">{cafeteria.lastUpdated}</p>
    </button>
  );
}

function App() {
  const handleCardClick = (cafeteria) => {
    // 나중에 여기서 상세 페이지로 이동하거나 모달을 띄우면 됨
    alert(`${cafeteria.name} 상세 화면은 아직 준비 중이에요!\n추후 여기서 그래프와 통계를 보여줄 예정입니다.`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>LuckyVicky 학식맵</h1>
        <p className="app-subtitle">
          지금 우리 학교 학식당은 얼마나 붐빌까?
        </p>
      </header>

      <main className="app-main">
        <section className="section">
          <h2 className="section-title">지금 학식당 혼잡도</h2>
          <p className="section-description">
            카드를 눌러서 각 식당의 상세 혼잡도와 통계를 확인해보세요.
          </p>

          <div className="cafeteria-grid">
            {cafeterias.map((cafeteria) => (
              <CafeteriaCard
                key={cafeteria.id}
                cafeteria={cafeteria}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>※ 현재 데이터는 예시입니다. 투표 기능 및 실시간 혼잡도는 추후 연동 예정.</p>
      </footer>
    </div>
  );
}

export default App;
