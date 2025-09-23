"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function App({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    setIsBlurred(true);
    const timeout = setTimeout(() => setIsBlurred(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className={`flex flex-col items-center justify-center ${isBlurred ? "blurred" : ""}`} style={{ transition: "filter 0.5s" }}>
      {children}
    </div>
  );
}