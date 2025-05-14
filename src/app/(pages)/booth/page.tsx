import TopBar from '@/app/_common/components/top-bar';
import TabDay from './_components/tab-day';
import BoothSection from './_components/booth-section';
import TabBooth from './_components/tab-booth';
import SearchBar from './_components/search-bar';
import ItemList from './_components/item-list';
interface BoothPageProps {
  searchParams: {
    day: string; // 28, 29, 30 - 오늘에 가장 가까운 날짜로 default
    section: string; // baekyang, hangeul, global - default: baekyang
    category: string; // all, booth, category - default: all
  };
}
export default async function BoothPage({ searchParams }: BoothPageProps) {
  const { day, section, category } = searchParams;
  console.log(day, section, category);
  return (
    <div id='booth-page' className='relative w-full h-full flex flex-col'>
      <TopBar title='부스' bgClassName='backdrop-blur-md bg-white/20' />
      <main className='px-7 w-full flex flex-col overflow-y-auto scrollbar-hide scroll-smooth'>
        <TabDay day={day} />
        <BoothSection section={section} />
        <TabBooth category={category} />
        <SearchBar />
        <ItemList />
      </main>
    </div>
  );
}
