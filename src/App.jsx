import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Admin/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import AboutPage from "./pages/Admin/AboutPage";
import MainLayout from "./layouts/MainLayout";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;
