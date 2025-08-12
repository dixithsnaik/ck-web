import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import {
  AuthShell,
  AuthForm,
  AuthIllustration,
  AuthShowcase,
} from "@/components/ui/authShell";
import { CK_ASSETS } from "@/constants/assets";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    Cookies.set("authToken", "12345", { expires: 7 });
    navigate("/onboarding");
  };

  return (
    <AuthShell>
      {/* Left Side: Login Form */}
      <AuthForm>
        <h2 className="text-xl font-bold mb-6 text-center">
          It’s nice to see you again! <br /> Log in to ComputeKart
        </h2>

        <button className="w-full max-w-xs flex items-center justify-center gap-2 border border-gray-600 rounded-lg px-4 py-2 mb-4 bg-white text-black">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        <div className="text-gray-400 mb-4">or login with e-mail</div>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full max-w-xs p-2 mb-3 rounded bg-gray-800 border border-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full max-w-xs p-2 mb-3 rounded bg-gray-800 border border-gray-700"
        />

        <div className="flex items-center justify-between w-full max-w-xs text-sm text-gray-400 mb-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Remember password
          </label>
          <button className="underline">Forgot password?</button>
        </div>

        <button
          onClick={handleLogin}
          className="w-full max-w-xs bg-lime-500 text-black py-2 rounded font-semibold"
        >
          Login
        </button>

        <div className="mt-4 text-gray-400 text-sm">
          Don’t have an account?{" "}
          <span className="text-lime-500 cursor-pointer">Sign up</span>
        </div>
      </AuthForm>

      {/* Right Side: Illustration */}
      <AuthIllustration>
        <AuthShowcase
          heading="Rent your PC, earn money—"
          subHeading= "join the affordable cloud network for all :)"
          image={CK_ASSETS.HERO_IMAGE.URL}
          altName={CK_ASSETS.HERO_IMAGE.ALT}
        />
      </AuthIllustration>
    </AuthShell>
  );
};

export default LoginPage;
