'use client';

import { dayList } from '@/app/(pages)/booth/_constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';
import { days } from '../../types/booth-union.type';
import { parseAsStringLiteral, useQueryState } from 'nuqs';

export function TabDay() {
  const [dayState, setDayState] = useQueryState(
    'day',
    parseAsStringLiteral(days).withDefault('28'),
  );

  return (
    <div className='pb-8 w-full flex items-center justify-start gap-3'>
      {dayList.map(dayBtn => (
        <button
          key={dayBtn.value}
          className={cn(
            'px-4 py-[10px] rounded-full shadow-md cursor-pointer transition-all duration-300 bg-white text-black text-label-s',
            dayState === dayBtn.value && 'bg-point !text-white000',
          )}
          onClick={() => setDayState(dayBtn.value)}
        >
          {dayBtn.label}
        </button>
      ))}
    </div>
  );
}
