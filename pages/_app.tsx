import { useRouter } from "next/router";
import "../app/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router]);
  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-sky-500 border-t-transparent" />
        </div>
      )}
      <Component {...pageProps} />;
    </>
  );
}
