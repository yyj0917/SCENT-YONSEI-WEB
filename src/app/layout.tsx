import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scent Of Yonsei',
  description: 'Scent Of Yonsei Festival Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Pretendard 웹폰트 CDN 설정 */}
        <link
          rel='stylesheet'
          as='style'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css'
          crossOrigin='anonymous'
        />
        {/* viewport 설정 */}
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
