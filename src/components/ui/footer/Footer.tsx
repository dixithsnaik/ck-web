export default function Footer() {
  return (
    <footer className="bg-ink text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Left Section */}
        <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>

        {/* Right Section */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="" className="hover:text-charcoal">
            About
          </a>
          <a href="" className="hover:text-charcoal">
            Contact
          </a>
          <a href="" className="hover:text-charcoal">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
