
import {
  AuthShell,
  AuthForm,
  AuthIllustration,
  AuthShowcase,
  AuthUserForm,
} from "@/components/ui/authShell";
import { CK_ASSETS } from "@/constants/assets";
import {

  AUTH_SHOWCASE_TEXT,

  SIGN_UP_HEADERS,

} from "@/constants/constants";

const SignupPage = () => {

  return (
    <AuthShell>
      <AuthForm>
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto ">
          <h2 className="flex flex-col text-2xl font-bold mb-10 text-center">
            <span>{SIGN_UP_HEADERS.TITLE}</span>
          </h2>
          <AuthUserForm mode="signup" redirectTo="/" />
        </div>
      </AuthForm>
      <AuthIllustration>
        <AuthShowcase
          heading={AUTH_SHOWCASE_TEXT.TITLE}
          subHeading={AUTH_SHOWCASE_TEXT.SUB_TITLE}
          image={CK_ASSETS.HERO_IMAGE.URL}
          altName={CK_ASSETS.HERO_IMAGE.ALT}
        />
      </AuthIllustration>
    </AuthShell>
  );
};

export default SignupPage;
