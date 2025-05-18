'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from '@/app/_core/components/carousel';
import * as React from 'react';

export function ImgCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className='relative w-full'>
      <CarouselContent className='rounded-[20px]'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className='relative w-full h-auto flex aspect-[3/4] items-center justify-center p-6 bg-gray200 rounded-[20px]'></div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* booth name, organization name */}
      <span className='z-20 absolute bottom-8 left-10 h-auto flex flex-col items-start gap-1 bg-inherit text-white000'>
        <h2 className='text-display-m'>부스명</h2>
        <p className='text-label-l'>단체명</p>
      </span>

      {/* 그라데이션 효과 */}
      <div className='z-10 absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-b-[20px]'></div>

      {/* current, total slide count */}
      <div className='absolute top-5 right-5 px-4 py-2 flex-center bg-white/70 rounded-[20px]'>
        <p className='text-gray600 text-label-l'>
          {current} / {count}
        </p>
      </div>
    </Carousel>
  );
}
