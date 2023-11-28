import PapayaButton from '@/components/papaya/PapayaButton';
import GameBoard from './(components)/GameBoard';

export default function SinglePlay() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-6 text-2xl">設置飛機</div>
      <GameBoard />
      <PapayaButton
        className="w-[200px] mt-6"
        size="large"
        theme="solid"
        type="primary"
      >
        完成
      </PapayaButton>
    </div>
  );
}
