import { menu } from "../../content/menu";

export default function Nav() {
  console.log(menu);
  return (
    <nav>
      {menu.map((item, index) => (
        <a href={item.slug} key={index}>
          {item.title}
        </a>
      ))}
    </nav>
  );
}
