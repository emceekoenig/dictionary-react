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
          <small>
            Website coded by{" "}
            <a
              href="https://chelsea-koenig.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Chelsea Koenig
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/emceekoenig/dictionary-react"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
