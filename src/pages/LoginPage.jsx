import { Link } from "react-router-dom";
import { LoginForm } from "../components";
import { Authillustration } from "../constants/image";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-deepDark py-8">
      <div className="max-w-[1368px] flex-1">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          {/* <!-- illustration and title --> */}
          <div>
            <img
              className="mb-12 max-w-full max-lg:hidden"
              src={Authillustration}
              alt="auth_illustration"
            />
            <div>
              <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">
                Facehook
              </h1>
              <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>
          {/* <!-- illustration and title ends -->
    <!-- login form --> */}
          <div className="card">
            <h1 className="text-center text-2xl font-bold py-3">Log in</h1>
            <LoginForm />
            <div className="py-4 lg:py-6 ">
              <p className="text-center text-xs text-gray-600/95 lg:text-sm ">
                Don’t have account?
                <Link
                  className="text-white transition-all hover:text-lwsGreen hover:underline ml-4"
                  to="/register"
                >
                  Create New
                </Link>
              </p>
            </div>
          </div>
          {/* <!-- login form ends --> */}
        </div>
      </div>
    </main>
  );
}
