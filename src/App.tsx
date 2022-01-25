import "./App.css";
import { worker } from "../mocks/browser";

// Start the mock API
worker.start()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-image">
          <svg
            width="135"
            height="126.515151515151516"
            viewBox="0 0 479.73 362.86"
          >
            <title>Ki Insurance</title>
            <path d="M227.03 0L76.4 171.44l-19.7-19.18 37.52-44.13L94.33 0H0v362.86h94.33V246.75l44.06-45.62 113 161.73h99.01L192.3 145.15 332.78 0zM384.87 0v362.86h94.86V79.5l-27.99 31.99-19.44-19.44 47.43-55.2V0z" />
          </svg>
        </div>

        <h1>Ki email signature generator</h1>

        <p>
          Hey there! <span className="rotate">👋</span>
        </p>
      </header>
    </div>
  );
}

export default App;
