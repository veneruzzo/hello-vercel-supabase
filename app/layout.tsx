export const metadata = { title: "Hello Vercel + Supabase" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", padding: 24 }}>{children}</body>
    </html>
  );
}
