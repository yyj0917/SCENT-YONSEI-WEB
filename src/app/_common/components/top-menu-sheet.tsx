import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_core/components/sheet';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
export default function TopMenuSheet() {
  const links = [
    {
      href: '/',
      label: '홈',
    },
    {
      href: '/notifications',
      label: '공지사항',
    },
    {
      href: '/booth',
      label: '부스정보',
    },
    {
      href: '/festival',
      label: '공연정보',
    },
    {
      href: '/location',
      label: '주요 시설 위치',
    },
    {
      href: '/makers',
      label: '만든이들',
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent side='left' className=''>
        <div
          className='w-full h-full '
          style={{
            backgroundImage: `url(${'/img/top-menu-background.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <SheetHeader className='pt-30 pl-3 flex flex-col'>
            <SheetTitle className='bg-opacity-100' />
            <SheetDescription className='pl-2'>
              {links.map(link => (
                <span key={link.href} className='w-full flex flex-col'>
                  <Link
                    href={link.href}
                    className='pl-2 py-4 text-display-m text-point'
                  >
                    {link.label}
                  </Link>
                  <span className='w-full h-[1px] bg-point'></span>
                </span>
              ))}
            </SheetDescription>
          </SheetHeader>
        </div>
      </SheetContent>
    </Sheet>
  );
}
