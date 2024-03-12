export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>dashboard共享ui</div>
      {children}
    </div>
  );
}
