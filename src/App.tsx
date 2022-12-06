import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
