import { cn } from "@/shared/libs";
import { IHeader } from "./Header.type";

export const Header = ({ className, ...props }: IHeader) => {
  return (
    <header className={cn(className)} {...props}>
      <div className="container">
        <div className="flex items-center py-5">Header</div>
      </div>
    </header>
  );
};
