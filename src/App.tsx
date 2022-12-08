import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import NewTaskPage from "./pages/NewTaskPage/NewTaskPage";
import TaskListPage from "./pages/TaskListPage/TaskListPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />}></Route>
          <Route path="/tasks/create" element={<NewTaskPage />}></Route>
          <Route
            path="/tasklists/read/:taskListId"
            element={<TaskListPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
