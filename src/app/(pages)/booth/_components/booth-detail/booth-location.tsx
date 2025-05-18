import Image from 'next/image';

export function BoothLocation() {
  return (
    <section className='px-4 py-3 w-full h-auto flex flex-col items-start bg-white000 rounded-[20px] aspect-square'>
      <h1 className='px-2 py-3 text-display-s text-black000'>위치</h1>
      <div className='relative w-full h-[calc(100%-48px)] flex rounded-[10px] bg-gray300 flex-shrink-0'>
        <Image
          src='/img/booth/hangeul-section.jpg'
          alt='백양로'
          fill
          className='object-cover px-1 py-4'
        />
      </div>
    </section>
  );
}
