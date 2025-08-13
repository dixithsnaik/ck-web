import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input/input";

interface AuthUserFormProps {
  mode: "login" | "signup";
  redirectTo?: string; // defaults to "/"
}

export const AuthUserForm: React.FC<AuthUserFormProps> = ({ mode, redirectTo = "/" }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const handleChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (mode === "login") {
      console.log("Logging in with", formData);
      // TODO: login API call
    } else {
      console.log("Signing up with", formData);
      // TODO: signup API call
    }

    navigate(redirectTo);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      <div className="space-y-4 w-full flex flex-col items-center justify-center">
        {mode === "signup" && (
          <Input
            hint="Full Name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full max-w-xs"
          />
        )}

        <Input
          hint="Email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full max-w-xs"
        />

        <Input
          hint="Password"
          type="password"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
          className="w-full max-w-xs"
        />

        {mode === "signup" && (
          <Input
            hint="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            className="w-full max-w-xs"
          />
        )}

        <div className="flex items-center justify-between w-full text-sm text-gray-400">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={(e) => handleChange("rememberMe", e.target.checked)}
            />{" "}
            Remember Me
          </label>

          {mode === "login" && (
            <Button className="bg-transparent text-gray-400 font-normal underline">
              Forgot Password
            </Button>
          )}
        </div>

        <Button onClick={handleSubmit} className="font-normal w-full">
          {mode === "login" ? "Login" : "Sign Up"}
        </Button>

        <div className="text-gray-400 text-sm gap-2 flex">
          <span>
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>
          <Button
            className="bg-transparent text-green-400 font-normal p-0"
            onClick={() => navigate(mode === "login" ? "/signup" : "/login")}
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
};
