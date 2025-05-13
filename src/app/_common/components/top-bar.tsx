import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import TopMenuSheet from './top-menu-sheet';
import { cn } from '@/app/_core/utils/cn';

export default function TopBar({
  title,
  bgClassName,
}: {
  title: string;
  bgClassName?: string;
}) {
  return (
    <nav className='absolute top-0 z-20 w-full'>
      {/* 블러 배경만 적용되는 레이어 */}
      <div
        className={cn(
          'absolute inset-0 z-[-1]', // blur + semi-transparent background
          bgClassName,
        )}
      />

      {/* 실제 콘텐츠 영역 */}
      <div className='px-6 pt-16 pb-3 w-full flex justify-between items-center text-white'>
        <TopMenuSheet />
        <p className='text-display-m'>{title}</p>
        <Link href='/' className='cursor-pointer'>
          <Image
            src={'/img/scent-logo.jpg'}
            alt='scent-logo'
            width={41}
            height={32}
            priority
          />
        </Link>
      </div>
    </nav>
  );
}
