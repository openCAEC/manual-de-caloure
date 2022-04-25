export default function Index() {}

Index.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(301, {
      Location: "/1-prefacio",
    });
    res.end();
  }

  return {};
};
