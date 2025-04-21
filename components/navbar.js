export default function Navbar() {
    return (
      <header className="sticky top-0 bg-white z-50 flex justify-between items-center px-8 py-6 shadow-sm">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-6" />
          <span className="font-semibold text-lg">mailmeteor</span>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium text-sm">
            {["Product","Features", "Resources", "Pricing"].map((item) => (
                <a
                key={item}
                href='#' className="px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                    {item}
                </a>
            ))}
          <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full">Sign in</a>
        </nav>
      </header>
    );
  }