import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full mx-auto flex items-center bg-slate-500 justify-between px-10 py-4 font-bold text-black">
      <div className="flex items-center">
        <Link href="/" className="mr-6 text-white hover:text-gray-300" style={{ textDecoration: 'none' }}>
          Home
        </Link>
      </div>
      <ul className="flex">
        <li className="mr-6">
          <Link href="/users" className="text-white hover:text-gray-300" style={{ textDecoration: 'none' }}>
            Users
          </Link>
        </li>
        <li>
          <Link href="/tasks" className="text-white hover:text-gray-300" style={{ textDecoration: 'none' }}>
            Tasks
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
