import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className='px-3 py-2 w-full h-auto flex items-center justify-start gap-2 border border-gray100 rounded-[10px] bg-white'>
      <Search className='size-6 text-gray500' />
      <input
        type='text'
        placeholder='부스명 또는 단체명을 입력해주세요'
        className='text-label-l text-gray500 w-full focus:outline-none focus:ring-0'
      />
    </div>
  );
}
