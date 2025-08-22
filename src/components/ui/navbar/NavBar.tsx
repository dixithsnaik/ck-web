import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

type NavItem = {
  name: string;
  options?: { label: string; onClick: () => void }[];
};

// ---------------- Nav Items ----------------
const navItems: NavItem[] = [
  {
    name: "Services",
    options: [
      { label: "Provider", onClick: () => console.log("Go to Services > Provider") },
      { label: "Consumer", onClick: () => console.log("Go to Services > Consumer") },
    ],
  },
  {
    name: "Manage",
    options: [
      { label: "Provider", onClick: () => console.log("Go to Manage > Provider") },
      { label: "Consumer", onClick: () => console.log("Go to Manage > Consumer") },
    ],
  },
  {
    name: "Installation Guide",
    options: [
      { label: "Provider", onClick: () => console.log("Go to Guide > Provider") },
      { label: "Consumer", onClick: () => console.log("Go to Guide > Consumer") },
    ],
  },
];

// ---------------- Dropdown Card ----------------
const Card = ({ options }: { options: { label: string; onClick: () => void }[] }) => (
  <div className="absolute mt-2 bg-white shadow rounded-xl min-w-38 z-10">
    {options.map((opt, idx) => (
      <Button
        key={idx}
        variant="secondary"
        className="block w-full text-left py-2 shadow-none hover:bg-gray-100 pr-4"
        onClick={opt.onClick}
      >
        {opt.label}
      </Button>
    ))}
  </div>
);

// ---------------- Desktop Menu ----------------
const DesktopMenu = ({
  dropdownOpen,
  handleDropdown,
}: {
  dropdownOpen: string | null;
  handleDropdown: (itemName: string) => void;
}) => {
  return (
    <div className="hidden md:flex items-center space-x-6 relative">
      {navItems.map((item) => (
        <div key={item.name} className="relative">
          <div
            className={`bg-transparent font-semibold cursor-pointer ${
              dropdownOpen === item.name ? "text-gray-900" : "text-[#45505C]"
            } hover:text-gray-900`}
            onClick={() => item.options && handleDropdown(item.name)}
          >
            {item.name}
          </div>
          {item.options && dropdownOpen === item.name && <Card options={item.options} />}
        </div>
      ))}
    </div>
  );
};

// ---------------- Mobile Menu ----------------
const MobileMenu = ({
  dropdownOpen,
  setDropdownOpen,
  handleDropdown,
}: {
  dropdownOpen: string | null;
  setDropdownOpen: (val: string | null) => void;
  handleDropdown: (itemName: string) => void;
}) => {
  return (
    <div className="md:hidden flex items-center">
      <Button
        variant="secondaryOutlined"
        onClick={() => setDropdownOpen(dropdownOpen === "mobile" ? null : "mobile")}
      >
        ☰
      </Button>
      {dropdownOpen === "mobile" && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col space-y-2 p-4 z-20">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <Button
                variant="secondaryOutlined"
                className={`${dropdownOpen === item.name ? "text-gray-900" : "text-[#45505C]"}`}
                onClick={() => item.options && handleDropdown(item.name)}
              >
                {item.name}
              </Button>
              {item.options && dropdownOpen === item.name && <Card options={item.options} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ---------------- Navbar ----------------
export default function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    setToken(sessionToken);
  }, []);

  const handleDropdown = (itemName: string) => {
    setDropdownOpen(dropdownOpen === itemName ? null : itemName);
  };

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full bg-white shadow px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16 relative"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 font-bold text-xl">
        <span>OK</span>
        <span>ComputeKart</span>
      </div>

      {/* Desktop Menu */}
      <DesktopMenu dropdownOpen={dropdownOpen} handleDropdown={handleDropdown} />

      {/* Auth Buttons / Profile */}
      <div className="flex items-center space-x-4">
        {!token ? (
          <>
            <Button
              variant="primaryOutlined"
              className="rounded-full px-6 py-1"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </Button>
            <Button
              variant="secondaryOutlined"
              className="rounded-full px-6 py-1"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-white font-semibold">G</span>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        handleDropdown={handleDropdown}
      />
    </nav>
  );
}
