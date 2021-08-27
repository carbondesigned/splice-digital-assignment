import Theme from "./Theme";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import Home from "./pages/Home";

// Components
import UtilBar from "./components/UtilBar/UtilBar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Theme>
      <div className="App">
        <UtilBar />
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Theme>
  );
};

export default App;
