import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LogInPage from "../pages/login/LogInPage";
import SignUpPage from "../pages/signup/SignUpPage";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="LogInPage" element={<LogInPage />} />
        <Route path="SignUpPage" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
