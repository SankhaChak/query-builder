import { QueryProvider } from "@/context/QueryContext";
import { Inter } from "@next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <main className={`${inter.className} font-sans`}>
        <Component {...pageProps} />
      </main>
    </QueryProvider>
  );
}
