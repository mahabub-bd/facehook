import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks";
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegistrationPage,
} from "./pages";
import PrivateRoutes from "./routes/PrivateRoutes";

export default function App() {
  const { auth } = useAuth();

  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/me" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </>
  );
}
