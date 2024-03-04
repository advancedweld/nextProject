import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>这是一个页面</h1>
      <h1>Hello, dashboard!</h1>
      <Link href={'/'}>回到首页</Link>
    </div>
  );
}
