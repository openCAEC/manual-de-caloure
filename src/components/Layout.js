export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper">{children}</div>
      <style jsx>{`
        .wrapper {
          max-width: 42rem;
          margin: 0 auto;
          padding: 1.5rem;
        }
      `}</style>
      <style jsx global>{``}</style>
    </>
  );
}
