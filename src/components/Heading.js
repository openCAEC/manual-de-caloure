import slugify from "../utils/slugify";

export default function Heading({ children }) {
  let id = slugify(children);

  console.log(`
  {
    title: "${children}",
    id: "${id}",
  },
  `);

  const handleClick = (e) => {
    e.preventDefault();

    // Copia o link
    navigator.clipboard.writeText(window.location.href + "#" + id);

    // Atualiza a URL
    if (history.pushState) {
      let l = window.location;

      var newurl = `${l.protocol}//${l.host}${l.pathname}#${id}`;
      window.history.pushState({ path: newurl }, "", newurl);
    }

    // Da scroll até o elemento
    const element = document.getElementById(id);
    element.scrollIntoView();
  };

  return (
    <>
      <div className="link-container">
        <h2 className="heading" id={id}>
          {children}{" "}
          <span
            onClick={(e) => handleClick(e)}
            className="link-button material-icons"
          >
            link
          </span>
        </h2>
      </div>

      <style jsx>{`
        .link-container .link-button {
          visibility: hidden;
          font-size: 1em;
          cursor: pointer;
        }

        .link-button:hover {
          color: #007bff;
        }

        .link-container:hover .link-button {
          visibility: visible;
        }
      `}</style>
    </>
  );
}
