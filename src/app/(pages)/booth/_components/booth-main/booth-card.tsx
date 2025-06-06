import Link from 'next/link';
import { type BoothMainInfo } from '@/app/_common/interfaces/booth.interface';
export function BoothCard({ booth }: { booth: BoothMainInfo }) {
  return (
    <Link href={`/booth/${booth.boothId}`}>
      <li className='w-full h-49 flex flex-col rounded-[10px] shadow-md hover:scale-105 transition-all duration-300'>
        <div className='relative w-full h-[130px] bg-main000/70 rounded-t-[10px]'>
          {booth.photo ? (
            <img
              src={booth.photo ?? '/img/booth/main-image.jpg'}
              alt={booth.name}
              className='object-cover rounded-t-[10px] w-full h-full'
            />
          ) : (
            <img
              src={'/img/booth/main-image.jpg'}
              alt={booth.name}
              className='object-cover rounded-t-[10px] w-full h-full'
            />
          )}
        </div>
        <div className='flex-1 min-w-0 px-[10px] py-3 w-full h-auto flex flex-col items-start gap-1 bg-white rounded-b-[10px]'>
          <h1 className='text-headline-l text-black000 line-clamp-1'>
            {booth.name}
          </h1>
          <p className='text-label-s text-point line-clamp-1'>
            {booth.organization}
          </p>
        </div>
      </li>
    </Link>
  );
}
