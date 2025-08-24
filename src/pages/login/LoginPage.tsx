import {
  AuthShell,
  AuthForm,
  AuthIllustration,
  AuthShowcase,
  AuthUserForm 
} from "@/components/ui/authShell";
import { HERO_IMAGE } from "@/constants/assets";
import { AUTH_SHOWCASE_TEXT, LOGIN_HEADERS } from "@/constants/constants";

const LoginPage = () => {
  return (
    <AuthShell>
      {/* Left Side: Login Form */}
      <AuthForm>
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto ">
          <h2 className="flex flex-col text-3xl font-medium mb-10 text-center">
            <span>{LOGIN_HEADERS.TITLE}</span>
            <span className="text-xl font-bold">{LOGIN_HEADERS.SUB_TITLE}</span>
          </h2>
        <AuthUserForm mode="login" redirectTo="/" />
        </div>
      </AuthForm>

      {/* Right Side: Illustration */}
      <AuthIllustration>
        <AuthShowcase
          heading={AUTH_SHOWCASE_TEXT.TITLE}
          subHeading={AUTH_SHOWCASE_TEXT.SUB_TITLE}
          image={HERO_IMAGE.URL}
          altName={HERO_IMAGE.ALT}
        />
      </AuthIllustration>
    </AuthShell>
  );
};

export default LoginPage;
