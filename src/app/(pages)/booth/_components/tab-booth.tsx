'use client';

import { categoryList } from '@/app/_common/constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';
import { useState } from 'react';

export default function TabBooth({ category }: { category: string }) {
  const [categoryState, setCategoryState] = useState(category);

  const handleCategoryClick = (category: string) => {
    const newParams = new URLSearchParams(window.location.search);
    newParams.set('category', category);
    setCategoryState(category);
    window.history.replaceState({}, '', `/booth?${newParams.toString()}`);
  };
  return (
    <div className='pt-8 pb-4 w-full flex items-center justify-start gap-3'>
      {categoryList.map(category => (
        <button
          key={category.name}
          className={cn(
            'px-4 py-[10px] rounded-[100px] shadow-md cursor-pointer hover:bg-light600 hover:text-white transition-all duration-300',
            categoryState === category.label
              ? 'bg-point !text-white000 text-label-l'
              : ' bg-white text-black text-label-l',
          )}
          onClick={() => handleCategoryClick(category.label)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
