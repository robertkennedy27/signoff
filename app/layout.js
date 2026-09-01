import "./globals.css";

export const metadata = {
  title: "Before I Sign Off — Robert Kennedy",
  description: "A personal farewell note from Robert Kennedy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}