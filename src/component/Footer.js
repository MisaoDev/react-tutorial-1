export default function Footer(props) {
  return (
    <footer className="has-background-grey-light py-4 mt-auto">
      <div className="container">
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
