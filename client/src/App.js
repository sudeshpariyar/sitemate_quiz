import "./App.css";
import Header from "./components/header/Header";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
    <div>
      <Header />
      <div className="app-wrapper">
        <div className="app-content">
          <LandingPage />
        </div>
      </div>
    </div>
  );
}

export default App;
