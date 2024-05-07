import "@/app/styles/_index.scss";
import { appTitle, cn } from "@/shared/libs";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { interFont } from "./fonts";

export const metadata: Metadata = {
  title: appTitle(),
  description: "Generated by create next app",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_META_CANONICAL,
  },
};

export const viewport: Viewport = {
  themeColor: "#141414",
  colorScheme: "light",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html className={cn("h-full !scroll-smooth", interFont.variable)} lang="ru">
      <body className="bg-app-clr-light text-app-clr-dark font-app-fm-inter h-full text-base font-normal antialiased rendering-speed">
        <div className="flex min-h-full flex-col overflow-hidden">
          <main className="flex-auto" id="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
