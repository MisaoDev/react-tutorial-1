const grillo = (
  <span role="img" aria-label="grillo / cricket">
    🦗
  </span>
);

export default function Hero(props) {
  return (
    <footer className="has-background-primary py-6 mb-6">
      <h1 className="title is-1">
        {grillo} React test {grillo}
      </h1>
    </footer>
  );
}
