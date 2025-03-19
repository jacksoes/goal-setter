import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage.tsx";
import LogInPage from "../pages/login/LogInPage.tsx";
import SignUpPage from "../pages/signup/SignUpPage.tsx";
import AddForm from "../pages/add form/AddForm.tsx";


const MainRoutes = ({goals, setGoals}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage goals={goals} setGoals={setGoals}  />}>
        <Route path="LogInPage" element={<LogInPage />} />
        <Route path="SignUpPage" element={<SignUpPage />} />
        <Route path="AddForm" element={<AddForm goals={goals} setGoals={setGoals} />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
