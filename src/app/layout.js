import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  adjustFontFallback: false
})

export const metadata = {
  title: "Family Restaurants in Minsk",
  description: "Family Restaurants in Minsk",
  keywords: ['поиск', 'ресторан', 'семья', 'отдых', 'терраса', 'маршрут', 'минск', 'кухня', 'еда'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
