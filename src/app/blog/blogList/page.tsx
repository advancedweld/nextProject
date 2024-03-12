import Link from 'next/link';
import { Button, Space } from 'antd';
export default function PostList({}) {
  const posts = [
    { id: 1, title: 'Post 1', slug: 'post-1' },
    { id: 2, title: 'Post 2', slug: 'post-2' },
    { id: 3, title: 'Post 3', slug: 'post-3' },
  ];
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Button type='primary'>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
