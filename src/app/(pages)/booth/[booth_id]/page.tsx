'use client';

import { useParams } from 'next/navigation';
import { TopBar } from '@/app/_common/components/top-bar';
import { ImgCarousel } from '../_components/booth-detail/img-carousel';
import { BoothInfo } from '../_components/booth-detail/booth-info';
import { BoothLocation } from '../_components/booth-detail/booth-location';
import { MenuList } from '../_components/booth-detail/menu-list';
export default function BoothDetailPage() {
  const { booth_id } = useParams();

  return (
    <div className='relative w-full h-full flex flex-col'>
      <TopBar title='부스명' bgClassName='backdrop-blur-md bg-white/20' />
      <main className='px-6 pt-37 pb-18 w-full h-full flex flex-col items-center gap-5 overflow-y-auto scrollbar-hide scroll-smooth'>
        <ImgCarousel />
        <BoothInfo />
        <BoothLocation />
        <MenuList />
      </main>
    </div>
  );
}
