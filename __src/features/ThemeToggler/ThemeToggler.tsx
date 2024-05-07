"use client";

import { cn } from "@/shared/libs";
import { useThemeToggler } from "./ThemeToggler.hook";
import { IThemeToggler } from "./ThemeToggler.type";

export const ThemeToggler = ({ className, ...props }: IThemeToggler) => {
  const { currentTheme, mounted, onToggleTheme } = useThemeToggler();

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Перключатель темы"
      className={cn(
        "active:text-blue-500 [@media(hover:hover)]:hover:text-blue-500",
        className,
      )}
      title="Перключатель темы"
      type="button"
      onClick={onToggleTheme}
      {...props}
    >
      {currentTheme === "dark" ? "Свет 🌞" : "Тьма 🌙"}
    </button>
  );
};
