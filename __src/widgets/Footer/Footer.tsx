import { ThemeToggler } from "@/features";
import { baseTitle, cn } from "@/shared/libs";
import Link from "next/link";
import { IFooter } from "./Footer.type";

const currentYear = new Date().getFullYear();

export const Footer = ({ className, ...props }: IFooter) => {
  return (
    <footer
      className={cn(
        "bg-app-clr-dark text-center text-sm text-app-clr-light",
        className,
      )}
      {...props}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-y-5 py-6 lg:flex-row dark:border-t dark:border-t-app-clr-light">
          <p>
            <Link
              className="inline-block active:underline [@media(hover:hover)]:hover:underline"
              href="/"
              prefetch={false}
            >
              {baseTitle}
            </Link>
            <span>
              {" "}
              &copy;&nbsp;2020&nbsp;&mdash; {currentYear} Все права защищены
            </span>
          </p>
          <div className="flex items-center">
            <ul className="flex flex-col items-center gap-x-8 gap-y-5 md:flex-row xl:gap-x-10">
              <li className="flex">
                <Link
                  className="inline-block active:underline [@media(hover:hover)]:hover:underline"
                  href="/user-agreement"
                  prefetch={false}
                >
                  Пользовательское соглашение
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="inline-block active:underline [@media(hover:hover)]:hover:underline"
                  href="/privacy-policy"
                  prefetch={false}
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <ThemeToggler />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
