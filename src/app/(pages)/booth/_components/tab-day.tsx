'use client';

import { dayList } from '@/app/(pages)/booth/_constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';
import { Day } from '../types/booth-union.type';
import { useQueryState } from 'nuqs';
export function TabDay({ initialDay }: { initialDay: Day }) {
  const [dayState, setDayState] = useQueryState('day', {
    defaultValue: initialDay,
  });

  const handleDayClick = (day: Day) => {
    setDayState(day);
  };

  return (
    <div className='pt-37 pb-8 w-full flex items-center justify-between'>
      {dayList.map(dayBtn => (
        <button
          key={dayBtn.day}
          className={cn(
            'px-4 py-[10px] rounded-full shadow-md cursor-pointer transition-all duration-300',
            dayState === dayBtn.day
              ? 'bg-point !text-white000 text-label-l'
              : ' bg-white text-black text-label-l',
          )}
          onClick={() => handleDayClick(dayBtn.day as Day)}
        >
          {dayBtn.label}
        </button>
      ))}
    </div>
  );
}
