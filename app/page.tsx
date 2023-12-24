import Footer from '@/components/Footer';
import GameModeCard from './(components)/GameModeCard';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex gap-8 mb-12">
        <GameModeCard
          title="VS 電腦"
          path="/single-play"
          modalContent="12345"
          type="single"
        />
        <GameModeCard
          title="VS 玩家"
          path="#"
          modalContent="12345"
          type="multiple"
        />
      </div>
      <Footer />
    </div>
  );
}
