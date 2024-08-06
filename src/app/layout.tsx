import "@/styles/global.scss";

export const metadata = {
  title: "The Entertainment Database",
  description: "Search any movie/serie!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
