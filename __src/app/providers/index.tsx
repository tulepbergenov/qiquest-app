import { IChildren } from "@/shared/types";
import { Provider as WrapBalancer } from "react-wrap-balancer";
import { ThemeProvider } from "./ThemeProvider";

export const Providers = ({ children }: IChildren) => {
  return (
    <ThemeProvider>
      <WrapBalancer>{children}</WrapBalancer>
    </ThemeProvider>
  );
};
