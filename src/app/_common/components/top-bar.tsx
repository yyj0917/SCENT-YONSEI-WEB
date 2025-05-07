import { AlignJustify } from 'lucide-react';
import ScentLogo from '@/public/svg/scent-logo.svg';
import Link from 'next/link';

export default function TopBar({ title }: { title: string }) {
  return (
    <nav className='absolute top-0 z-20 px-6 py-3 w-full flex justify-between items-center text-white'>
      <button>
        <AlignJustify />
      </button>
      <p className='text-display-s'>{title}</p>
      <Link href='/' className='cursor-pointer'>
        <ScentLogo />
      </Link>
    </nav>
  );
}
