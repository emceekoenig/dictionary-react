import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>

        <main>
          <Dictionary />
        </main>

        <footer className="App-footer mt-3">
          <small>Coded by Chelsea Koenig</small>
        </footer>
      </div>
    </div>
  );
}
