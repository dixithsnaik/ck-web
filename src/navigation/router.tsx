import { createBrowserRouter, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import type { ReactNode } from "react";
import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/login/LoginPage";
import SignupPage from "@/pages/signup/SignupPage";
import ProfilePage from "@/pages/profile/ProfilePage";

type RouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: RouteProps) {
  const token = Cookies.get("authToken");
  return token ? children : <Navigate to="/login" replace />;
}

// function MobileOnlyRoute({ children }: RouteProps) {
//   const isMobile = window.innerWidth <= 768;
//   return isMobile ? children : <Navigate to="/" replace />;
// }

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
]);
