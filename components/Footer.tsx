'use client';

import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full">
      <div className="text-sm">Created by Johnson Huang</div>
      <div className="flex gap-4">
        <Link href="mailto: imchung0707@gmail.com">
          <EnvelopeIcon className="w-[30px] h-[30px] text-black" />
        </Link>
        <Link
          href="https://github.com/JohnsonHuang555/find-plane-head"
          target="_blank"
        >
          <Image
            src="/github-mark.svg"
            alt="github"
            width={30}
            height={30}
            priority
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
