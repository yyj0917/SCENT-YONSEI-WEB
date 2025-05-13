import TopBar from '@/app/_common/components/top-bar';

export default function BoothPage() {
  return (
    <div className='relative w-full h-full flex flex-col'>
      <TopBar title='부스' bgClassName='backdrop-blur-md bg-white/20' />
    </div>
  );
}
