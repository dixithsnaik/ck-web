export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Left Section */}
        <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>

        {/* Right Section */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="" className="hover:text-gray-400">
            About
          </a>
          <a href="" className="hover:text-gray-400">
            Contact
          </a>
          <a href="" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
