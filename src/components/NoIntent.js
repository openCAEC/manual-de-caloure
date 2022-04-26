export default function NoIntent({ children }) {
  return (
    <>
      <div className="no-indent">{children}</div>

      <style jsx>{`
        .no-indent {
          text-indent: 0 !important;
        }
      `}</style>
    </>
  );
}
