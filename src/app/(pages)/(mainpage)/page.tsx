import { TopBar } from '@/app/_common/components/top-bar';
import DayCard from './components/day-card';
import { DayCardData } from './components/day-card-data';
import Footer from '@/app/_common/components/underbar';
import Button from './components/button';
import { InView } from '@/app/_core/components/in-view';

export default function MainPage() {
  return (
    <div className='mainpage-background min-h-screen w-full'>
      <TopBar title='' />

      <main className='flex flex-col'>
        <section className='w-full flex flex-col items-center gap-[48px] mt-[800px] mx-auto'>
          {DayCardData.map((card, idx) => (
            <InView
              key={idx}
              as='div'
              variants={{
                hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              viewOptions={{ margin: '0px 0px -100px 0px', once: true }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <DayCard image={card.image} texts={card.texts} key={idx} />
            </InView>
          ))}
        </section>

        <div className='flex flex-col items-center gap-[22px] mt-[57px] mb-[87px]'>
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ margin: '0px 0px -100px 0px', once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Button href='/booth'>부스 정보 보러가기</Button>
          </InView>

          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ margin: '0px 0px -100px 0px', once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Button href='/festival'>공연 정보 보러가기</Button>
          </InView>
        </div>
      </main>
      <footer className='flex items-center justify-center'>
        <Footer />
      </footer>
    </div>
  );
}
