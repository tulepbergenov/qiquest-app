import { appTitle } from "@/shared/libs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const Home = () => {
  return (
    <section>
      <header className="container sm:max-w-screen-sm">
        <h1>Главная</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          repellat consequatur placeat accusamus neque ab excepturi quasi!
          Aspernatur delectus rerum adipisci reiciendis numquam facere
          architecto asperiores quo, corrupti ullam itaque.
        </p>
      </header>
      <div className="mx-auto mt-5 flex max-w-screen-sm flex-col gap-y-3 px-4">
        <input placeholder="Текст" type="text" />
        <input placeholder="Текст" type="password" />
        <input placeholder="Текст" type="email" />
        <textarea cols={30} placeholder="Текст" rows={10} />
        <button type="button">Button</button>
        <label className="flex items-center gap-2" htmlFor="checkbox">
          <input id="checkbox" type="checkbox" />
          <span>Checkbox</span>
        </label>
      </div>
    </section>
  );
};

export default Home;
