/*
 * @Author: xiangshangzhi
 * @Date: 2024-02-23 10:57:42
 * @FilePath: \nextProject\src\app\page.tsx
 * @Description: next中使用antd 参考 https://ant-design.antgroup.com/docs/react/use-with-next-cn
 * https://github.com/ant-design/ant-design-examples/tree/main/examples/with-nextjs-app-router-inline-style
 */
import Link from 'next/link';
import { Button, Space } from 'antd';
import styles from './style.module.css'

export default function Page() {
  return (
    <div className={styles.wrap}>
      <h1>Hello, Next.js!</h1>
      <Space>
        <Link href={'./dashboard'}>to dashboard</Link>
        <Link href={'./blog'}>to blog</Link>
        <Link href={'./blog/blogList'}>to blogList</Link>
      </Space>
    </div>
  );
}
