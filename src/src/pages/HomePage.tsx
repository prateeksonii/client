import type { FC } from "react";
import { Link, RouteProps } from "react-router-dom";

const HomePage: FC<RouteProps> = () => {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl">Invio</h1>
      <p className="font-light text-xl">Your mailing client</p>
      <div className="mt-4 flex items-center gap-4">
        <Link
          to="/signup"
          className="transition-all duration-200 bg-primary py-2 px-5 font-regular text-white rounded hover:bg-primary-dark"
        >
          Signup
        </Link>
        <Link
          to="/signin"
          className="transition-all duration-200 bg-primary py-2 px-5 font-regular text-white rounded hover:bg-primary-dark"
        >
          Signin
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
