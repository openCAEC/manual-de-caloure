export default function AlertBox({ children, icon = "error_outline" }) {
  return (
    <>
      <div className="content">
        <span className="tag material-icons">{icon}</span>
        {children}
      </div>

      <style jsx>{`
        .content {
          border-radius: 0.5em;
          padding: 1.4em 0.75em;
          border: 1px solid var(--pink);
          text-align: justify;
          position: relative;
        }

        .tag {
          position: absolute;
          top: -0.8rem;
          left: -0.8rem;
          padding: 0.4rem;
          background: var(--pink);
          border-radius: 100%;
        }
      `}</style>
    </>
  );
}
