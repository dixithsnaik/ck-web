import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div >
      <h1 className="">Home - Public</h1>
      <h1 onClick={() => navigate("/profile")}>Go to Profile</h1>
      <Button variant="primary" type="submit">
  <span>Primary Button</span>
</Button>

<Button variant="cancel" className="underline">
  <span>Cancel</span>
</Button>

    </div>
  );
}
