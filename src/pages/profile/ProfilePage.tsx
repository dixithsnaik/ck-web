import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/onboarding");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Profile</h1>
      <p>Welcome to your profile page.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
