'use client';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: (keyword: string) => void;
};

export default function SearchInput({
  value,
  onChange,
  onSearch,
}: SearchInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmed = value.trim();
      if (trimmed) {
        onSearch(trimmed); // 검색어 전달
      }
    }
  };

  return (
    <div className='relative w-full mt-5'>
      <img
        src='/svg/notice/search.svg'
        alt='검색아이콘'
        className='absolute left-3 top-1/2 -translate-y-1/2 transform h-5 text-[rgba(181,187,193,1)]'
      />
      <input
        type='text'
        placeholder='공지사항을 검색해주세요'
        className='w-full h-[40px] pl-10 pr-4 py-2 mb-1 text-sm rounded-[10px] border border-[rgba(223,244,255,1)] bg-white focus:outline-none'
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        maxLength={30}
      />
    </div>
  );
}
