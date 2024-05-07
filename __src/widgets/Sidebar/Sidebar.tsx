import { cn } from "@/shared/libs";
import { IDivElement } from "@/shared/types";

export const Sidebar = ({ className, ...props }: IDivElement) => {
  return (
    <aside className={cn(className)} {...props}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        excepturi nostrum expedita porro quo? Optio quae officia non voluptates
        voluptas, voluptatibus atque perferendis praesentium, blanditiis aliquam
        soluta, fugiat porro laborum.
      </p>
    </aside>
  );
};
