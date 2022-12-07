import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import TaskListPage from "./pages/TaskListPage/TaskListPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />}></Route>
          <Route path="/tasks/:id" element={<TaskListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
