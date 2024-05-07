"use client";

import { IChildren } from "@/shared/types";
import { ThemeProvider as _ThemeProvider } from "next-themes";

export const ThemeProvider = ({ children }: IChildren) => {
  return <_ThemeProvider>{children}</_ThemeProvider>;
};
