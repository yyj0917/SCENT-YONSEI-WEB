import TopBar from '@/app/_common/components/top-bar';
import { MAKERS_INFO } from '@/app/_common/constants/makers-info';
import { MakersInfo } from '@/app/_common/interfaces/makers.interface';
import LionLogo from '@/public/svg/lion-logo.svg';
import LikelionBrandlogo from '@/public/svg/likelion-brandlogo.svg';

export default function ReviewPage() {
  return (
    <div className='relative main-background w-full min-h-screen flex-col'>
      <TopBar
        title='후기 남기기'
        bgClassName='backdrop-blur-[4px] bg-white/20'
      />
      <main className='pt-14 pb-20 z-10 w-full h-full flex-1 flex flex-col items-center overflow-y-auto scrollbar-hide'>
        {/* main logo section */}
        <section className='py-16 w-full h-full flex flex-col items-center gap-4 text-white'>
          <div className='pt-[37.13px] pb-[49.95px]'>
            <LionLogo />
          </div>
          <div>
            <LikelionBrandlogo />
          </div>
          <p className='text-display-m text-white'>멋쟁이사자처럼 13기</p>
        </section>
      </main>
    </div>
  );
}
