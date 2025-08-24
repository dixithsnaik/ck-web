import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input/input";
import { loginUser, registerUser } from "@/apiServices/managementApis/Apis";
import { CustomAlert } from "../Alert/CustomAlert";

interface AuthUserFormProps {
  mode: "login" | "signup";
  redirectTo?: string;
}

export const AuthUserForm: React.FC<AuthUserFormProps> = ({
  mode,
  redirectTo = "/",
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    field: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (mode === "login") {
        const payload = {
          username_or_email: formData.email || formData.name,
          password: formData.password,
        };

        const res = await loginUser(payload);
        if (!res) {
          setError("Invalid credentials. Please try again.");
          return;
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          return;
        }

        const payload = {
          email: formData.email,
          username: formData.name,
          password: formData.password,
        };

        const res = await registerUser(payload);
        if (!res) {
          setError("Registration failed. Please try again.");
          return;
        }
      }

      // Success → navigate
      navigate(redirectTo);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Auth error:", err);
    }
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

        <div className="flex items-center justify-between w-full text-sm text-silverGray">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={(e) => handleChange("rememberMe", e.target.checked)}
            />
            Remember Me
          </label>

          {mode === "login" && (
            <Button className="bg-transparent text-silverGray font-normal underline">
              Forgot Password
            </Button>
          )}
        </div>
        <Button
          onClick={handleSubmit}
          className="w-full py-2"
          variant="primaryOutlined"
        >
          {mode === "login" ? "Login" : "Sign Up"}
        </Button>

        <div className="text-silverGray text-sm gap-2 flex">
          <span>
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>
          <Button
            className="bg-transparent text-lime font-normal p-0"
            onClick={() => navigate(mode === "login" ? "/signup" : "/login")}
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </Button>
        </div>
      </div>
      {error && (
        <CustomAlert
          type="error"
          message={error || ""}
          onClose={() => setError(null)}
        />
      )}
    </div>
  );
};
