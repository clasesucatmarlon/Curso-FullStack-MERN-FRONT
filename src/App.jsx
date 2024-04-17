import {Routes, Route} from "react-router-dom"
import Home from "./pages/Admin/Home";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;
