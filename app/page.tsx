import GameModeCard from './(components)/GameModeCard';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-8">
        <GameModeCard
          title="VS 電腦"
          path="/single-play"
          modalContent="12345"
        />
        <GameModeCard title="VS 玩家" path="#" modalContent="12345" />
      </div>
    </div>
  );
}
