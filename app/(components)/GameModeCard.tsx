'use client';

import { useRouter } from 'next/navigation';
import PapayaCard from '@/components/papaya/PapayaCard';
import { Modal } from '@douyinfe/semi-ui';
import {
  UserGroupIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

type GameModeCardProps = {
  type: 'single' | 'multiple';
  title: React.ReactNode;
  path: string;
  modalContent: React.ReactNode;
};

const GameModeCard = ({
  type,
  title,
  path,
  modalContent,
}: GameModeCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (type === 'multiple') {
      Modal.info({
        title: '提示',
        content: 'Coming soon',
        centered: true,
        icon: null,
      });
      return;
    }
    Modal.confirm({
      title: '提示',
      content: modalContent,
      onOk: () => router.push(path),
      centered: true,
      icon: null,
    });
  };

  return (
    <div onClick={handleClick} className="w-[300px]">
      <PapayaCard
        shadows="always"
        className="min-h-[200px] flex items-center justify-center"
        bodyStyle={{
          fontSize: '40px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {type === 'multiple' && <UserGroupIcon className="w-[70px] mb-5" />}
        {type === 'single' && <ComputerDesktopIcon className="w-[70px] mb-5" />}
        <span className="mb-4">{title}</span>
      </PapayaCard>
    </div>
  );
};

export default GameModeCard;
