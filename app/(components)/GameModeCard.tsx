'use client';

import { useRouter } from 'next/navigation';
import PapayaCard from '@/components/papaya/PapayaCard';
import { Modal } from '@douyinfe/semi-ui';

type GameModeCardProps = {
  title: React.ReactNode;
  path: string;
  modalContent: React.ReactNode;
};

const GameModeCard = ({ title, path, modalContent }: GameModeCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (path === '#') {
      Modal.info({
        title,
        content: 'Coming soon',
        centered: true,
      });
      return;
    }
    Modal.confirm({
      title,
      content: modalContent,
      onOk: () => router.push(path),
      centered: true,
    });
  };

  return (
    <div onClick={handleClick} className="w-[400px]">
      <PapayaCard
        shadows="always"
        className="flex justify-center items-center h-[400px]"
        bodyStyle={{
          fontSize: '60px',
        }}
      >
        {title}
      </PapayaCard>
    </div>
  );
};

export default GameModeCard;
