import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-center items-center flex-col">
      <Image
        className="mb-4"
        alt="logo"
        src="/pexels-photo-3769138.jpeg"
        width={300}
        height={200}
      />
      <div className="text-md font-semibold">歡迎來到尋找飛機頭遊戲</div>
      <div className="text-md font-semibold">
        遊戲目標只要找到三個飛機頭即為獲勝
      </div>
    </header>
  );
};

export default Header;
