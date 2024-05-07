import { appTitle } from "@/shared/libs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Категория"),
};

const Category = () => {
  return (
    <section>
      <header>
        <h1>Категория</h1>
      </header>
    </section>
  );
};

export default Category;
