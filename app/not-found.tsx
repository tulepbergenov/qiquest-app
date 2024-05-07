import { appTitle } from "@/shared/libs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Ресурс не найден"),
};

const NotFound = () => {
  return (
    <section>
      <header>
        <h1>Ресурс не найден</h1>
      </header>
    </section>
  );
};

export default NotFound;
