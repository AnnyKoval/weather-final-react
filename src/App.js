import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          This project is coded by{" "}
          <a href="https://annakoval-cv.netlify.app/"> Anna Koval</a> and
          open-sourced on{" "}
          <a
            href="https://github.com/AnnyKoval/weather-final-react"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
