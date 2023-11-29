import Hero from "./Components/Hero";
import Demo from "./Components/Demo";
import "./App.css";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>

      <div className="app">
        <Hero />
        <Demo />
        <Footer />
      </div>
    </main>
  );
};

export default App;
