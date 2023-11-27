import PapayaCard from '@/components/papaya/PapayaCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-8">
        <Link href="/single-play" className="w-[400px]">
          <PapayaCard
            shadows="always"
            className="flex justify-center items-center h-[400px]"
            bodyStyle={{
              fontSize: '60px',
            }}
          >
            VS 電腦
          </PapayaCard>
        </Link>
        <Link href="#" className="w-[400px]">
          <PapayaCard
            shadows="always"
            className="w-[400px] flex justify-center items-center h-[400px]"
            bodyStyle={{
              fontSize: '60px',
            }}
          >
            VS 玩家
          </PapayaCard>
        </Link>
      </div>
    </div>
  );
}
