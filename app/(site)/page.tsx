import { appTitle } from "@/shared/libs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const Home = () => {
  return (
    <section>
      <header>
        <h1>Главная</h1>
      </header>
    </section>
  );
};

export default Home;
