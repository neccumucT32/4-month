import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <Title />
      <h1>I am Header component</h1>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Title />
      <h2>I am Content component</h2>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <Title />
      <h3>I am Footer component</h3>
    </div>
  );
}

function Title() {
  return <h4>I am Title component</h4>;
}

export default App;
