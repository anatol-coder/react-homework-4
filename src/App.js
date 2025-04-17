import "./App.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <br />
        <Main />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
