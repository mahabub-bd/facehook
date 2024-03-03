import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components";
import { useAuth } from "../hooks";

export default function PrivateRoutes() {
  const { auth } = useAuth();

  return (
    <>
      {auth.user ? (
        <main className="mx-auto max-w-[1280px] py-8">
          <div className="container">
            <Header />
            <Outlet />
          </div>
        </main>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}
