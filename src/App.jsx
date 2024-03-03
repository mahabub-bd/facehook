import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegistrationPage,
} from "./pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/me" element={<ProfilePage />} />
      </Routes>
    </>
  );
}
