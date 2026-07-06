import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  // Shared active styling utility for Tailwind
  const activeStyle = ({ isActive }) => 
    `px-3 py-2 rounded-md font-medium text-sm transition-colors ${
      isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Persistent Navigation Bar */}
      <nav className="bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl tracking-wider">E-Shop</span>
            </div>
            <div className="flex space-x-4">
              <NavLink to="/" className={activeStyle}>Home</NavLink>
              <NavLink to="/shop" className={activeStyle}>Shop</NavLink>
              <NavLink to="/cart" className={activeStyle}>Cart</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Dynamic Sub-Page Container */}
      <main className="py-6">
        <Outlet />
      </main>
      {/* Persistent Footer with Links */}
      <footer className="bg-gray-800 text-gray-300 mt-12 py-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} ReactStore. All rights reserved.</p>
          </div>
          {/* Footer Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
            <NavLink to="/shop" className="hover:text-white transition-colors">Shop</NavLink>
            <NavLink to="/cart" className="hover:text-white transition-colors">Cart</NavLink>
          </div>
        </div>
      </footer>

    </div>
  );
}
