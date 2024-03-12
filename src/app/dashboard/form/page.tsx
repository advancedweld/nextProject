import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>this is in form page</h1>
      <h1>Hello, form page!</h1>
      <Link href={'/dashboard'}>回到dashboard</Link>
    </div>
  );
}
