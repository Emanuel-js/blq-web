import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "./reactQueryClient";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "테스트밸리 - 전자제품 사는게 즐겁다",
  description: "새 상품 구매부터 체험, 검증된 중고, 수리비 보장, 합리적인 중고판매까지 전자제품의 모든 것을 함께 하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ReactQueryClientProvider>
   <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ReactQueryClientProvider>
  );
}
