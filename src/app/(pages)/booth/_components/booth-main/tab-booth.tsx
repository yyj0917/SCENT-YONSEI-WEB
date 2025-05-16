'use client';

import { categoryList } from '@/app/(pages)/booth/_constants/booth-page.constants';
import { cn } from '@/app/_core/utils/cn';
import { Category } from '../../types/booth-union.type';
import { useQueryState } from 'nuqs';

export function TabBooth({ initialCategory }: { initialCategory: Category }) {
  const [categoryState, setCategoryState] = useQueryState('category', {
    defaultValue: initialCategory,
  });

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
          onClick={() => setCategoryState(category.label as Category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
