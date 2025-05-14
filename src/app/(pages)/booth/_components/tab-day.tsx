'use client';

import { dayList } from '@/app/_common/constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';
import { useState } from 'react';

export default function TabDay({ day }: { day: string }) {
  const [dayState, setDayState] = useState(day);

  const handleDayClick = (day: string) => {
    const newParams = new URLSearchParams();
    newParams.set('day', day);
    setDayState(day);
    window.history.replaceState(
      {},
      '',
      `/booth?${newParams.toString()}&section=baekyang&category=all`,
    );
  };
  return (
    <div className='pt-37 pb-8 w-full flex items-center justify-between'>
      {dayList.map(dayBtn => (
        <button
          key={dayBtn.day}
          className={cn(
            'px-4 py-[10px] rounded-[100px] shadow-md cursor-pointer transition-all duration-300',
            dayState === dayBtn.day
              ? 'bg-point !text-white000 text-label-l'
              : ' bg-white text-black text-label-l',
          )}
          onClick={() => handleDayClick(dayBtn.day)}
        >
          {dayBtn.label}
        </button>
      ))}
    </div>
  );
}
