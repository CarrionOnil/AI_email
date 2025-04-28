import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white z-50 flex justify-between items-center px-8 py-6 shadow-sm">
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-lg">Careerlines</span>
      </div>
      <nav className="hidden md:flex space-x-6 font-medium text-sm">
        {[
          { name: "Product", href: "/" },
          { name: "Features", href: "/" },
          { name: "Resources", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}

        {/* Sign In Button */}
        <Link href="/signin" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full">
          Sign in
        </Link>
      </nav>
    </header>
  );
}

