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
      <div className="mx-auto flex max-w-screen-sm flex-col gap-y-3 px-4">
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
