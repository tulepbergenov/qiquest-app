import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const onToggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    currentTheme,
    onToggleTheme,
    mounted,
  };
};
