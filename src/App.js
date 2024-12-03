import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello world</h1>
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <Title />
      <h1>I am Header Component</h1>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Title />
      <h3>I am Content Component</h3>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <Title />
      <h2>I am Footer Component</h2>
    </div>
  );
}

function Title() {
  return <h1>Title Component</h1>;
}

export default App;
