// import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetailSurat from "./pages/DetailSurat";

function App() {
  return (
    <>
      <div className="d-flex row">
        <BrowserRouter basename="/suwantosanjaya.github.io">
          <div className=" col-3">
            <Navbar />
          </div>
          <div className=" col-9">
            <Content>
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/surat/:id" element={<DetailSurat />}></Route>
              </Routes>
            </Content>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
