import { appTitle } from "@/shared/libs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Поиск"),
};

const Search = () => {
  return (
    <section>
      <header>
        <h1>Поиск</h1>
      </header>
    </section>
  );
};

export default Search;
