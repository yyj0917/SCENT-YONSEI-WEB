'use client';

import NoticeItem from './NoticeItem';

// 공지 데이터 타입 정의
export type Notice = {
  noticeId: number;
  title: string;
  importance: boolean;
  category: string;
  created_at: string;
  updated_at: string;
  photoUrl?: string | null;
};

// props 타입 정의
type NoticeListProps = {
  noticeList: Notice[];
  selectedCategory: string;
  searchKeyword: string;
};

export default function NoticeList({
  noticeList,
  selectedCategory,
}: NoticeListProps) {
  // 중요 공지 유지
  const fixedNotices = noticeList.filter(n => n.importance);

  // 일반 공지는 최신순 정렬
  const normalNotices = noticeList
    .filter(n => !n.importance)
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );

  const sortedNotices = [...fixedNotices, ...normalNotices];
  return (
    <div className='flex flex-col gap-3'>
      {sortedNotices.map(notice => (
        <NoticeItem key={notice.noticeId} notice={notice} />
      ))}
    </div>
  );
}
