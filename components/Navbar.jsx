import Link from "next/link"

function Navbar() {
  return (
    <nav className="bg-slate-400 mb-4 flex justify-between items-center px-10 p-4 font-bold text-black">
        <Link href="/" >
            Home 
        </Link>
        <ul>
            <li>
                <Link href="/users">
                    Users
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
