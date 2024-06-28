import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// 引入'@ant-design/nextjs-registry 解决样式问题
import { AntdRegistry } from '@ant-design/nextjs-registry';
import cx from 'classnames'
import styles from './style.module.css'
import './globals.css';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Xsz Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className= {cx( inter.className,styles.layoutWrap )}>
        <div className={styles.title}>根布局，layout共享ui</div>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
