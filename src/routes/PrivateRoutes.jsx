import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components";
import { useAuth } from "../hooks";
import { ProfileProvider } from "../providers";

export default function PrivateRoutes() {
  const { auth } = useAuth();

  return (
    <>
      {auth.authToken ? (
        <>
          <ProfileProvider>
            <Header />
            <main className="mx-auto max-w-[1280px] py-8">
              <div className="container">
                <Outlet />
              </div>
            </main>
          </ProfileProvider>
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}
