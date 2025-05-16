import { TopBar } from '@/app/_common/components/top-bar';
import { TabDay } from './_components/tab-day';
import { BoothSection } from './_components/booth-section';
import { TabBooth } from './_components/tab-booth';
import { SearchBar } from './_components/search-bar';
import { ItemList } from './_components/item-list';
import { Day, Section, Category } from './types/booth-union.type';
interface BoothPageProps {
  searchParams: {
    day: Day;
    section: Section;
    category: Category;
  };
}
export default async function BoothPage({ searchParams }: BoothPageProps) {
  const { day, section, category } = searchParams;
  return (
    <div id='booth-page' className='relative w-full h-full flex flex-col'>
      <TopBar title='부스' bgClassName='backdrop-blur-md bg-white/20' />
      <main className='px-7 w-full flex flex-col overflow-y-auto scrollbar-hide scroll-smooth'>
        <TabDay initialDay={day} />
        <BoothSection initialSection={section} />
        <TabBooth initialCategory={category} />
        <SearchBar />
        <ItemList />
      </main>
    </div>
  );
}
