import "./App.css";
import Species from "./component/Species";
import Header from "./component/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Psychological from "./component/Psychological";
import TestResult from "./component/TestResult";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/species" element={<Species />}></Route>
          <Route path="/psychological" element={<Psychological />}></Route>
          <Route path="/test-result" element={<TestResult />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
