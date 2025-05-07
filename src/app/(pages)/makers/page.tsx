import TopBar from '@/app/_common/components/top-bar';
import { MAKERS_INFO } from '@/app/_common/constants/makers-info';
import { MakersInfo } from '@/app/_common/interfaces/makers.interface';
import LionLogo from '@/public/svg/lion-logo.svg';

export default function MakersPage() {
  return (
    <div className='relative makers-background w-full h-full flex flex-col'>
      <TopBar title='만든 이들' />
      <main className='pt-14 pb-20 z-10 w-full h-full flex-1 flex flex-col items-center overflow-y-auto scrollbar-hide'>
        {/* main logo section */}
        <section className='py-16 w-full h-full flex flex-col items-center gap-4 text-white'>
          <LionLogo />
          <p className='text-display-m'>멋쟁이사자처럼 연세</p>
          <p className='text-headlint-l'>05.01 ~ 05.23</p>
        </section>

        {/* main content section - plan/design, frontend, backend */}
        <section className='flex flex-col items-center gap-10'>
          {MAKERS_INFO.map(({ title, info }: MakersInfo) => (
            <div key={title} className='flex flex-col items-center gap-10'>
              <h2 className='px-2 py-1 bg-white text-point text-display-s'>
                {title}
              </h2>
              <div className='grid grid-cols-2 gap-15'>
                {info.map(({ id, major, name }) => (
                  <div
                    key={id}
                    className='flex flex-col items-center gap-1 text-white'
                  >
                    <p className='text-label-s'>{major}</p>
                    <p className='text-headline-l'>{name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
