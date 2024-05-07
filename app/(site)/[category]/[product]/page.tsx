import { appTitle } from "@/shared/libs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Продукт"),
};

const Product = () => {
  return (
    <section>
      <header>
        <h1>Продукт</h1>
      </header>
    </section>
  );
};

export default Product;
