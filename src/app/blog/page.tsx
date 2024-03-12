import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>这是一个blog页面</h1>
      <div>
        <Link href={'/'}>回到首页</Link>
      </div>
    </div>
  );
}
