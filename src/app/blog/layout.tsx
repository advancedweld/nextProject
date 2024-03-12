export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>blog共享ui</div>
      {children}
    </div>
  );
}
