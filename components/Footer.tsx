'use client';

// import { Email} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center">
      <Link
        href="https://github.com/JohnsonHuang555/find-plane-head"
        target="_blank"
      >
        <Image
          className="w-6"
          src="/github-mark.svg"
          alt="github"
          width={0}
          height={0}
          priority
        />
      </Link>
      <Link href="mailto: imchung0707@gmail.com">
        
      </Link>
    </footer>
  );
};

export default Footer;
