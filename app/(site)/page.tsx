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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          repellat consequatur placeat accusamus neque ab excepturi quasi!
          Aspernatur delectus rerum adipisci reiciendis numquam facere
          architecto asperiores quo, corrupti ullam itaque.
        </p>
      </header>
    </section>
  );
};

export default Home;
