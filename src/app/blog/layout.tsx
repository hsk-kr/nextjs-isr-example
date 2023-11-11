export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="px-8 max-w-4xl mx-auto py-12">{children}</main>;
}
