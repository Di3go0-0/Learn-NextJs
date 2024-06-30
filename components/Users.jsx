// "use client";
import Link from "next/link";

export default function users({ users }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li className="bg-slate-400 mb-2 p-4 rounded text-black flex justify-between cursor-pointer hover:bg-slate-500 hover:shadow-lg transition duration-300">
            <div>
              <h5 className="font-bold">
                {user.id} Name : {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-600">Email : {user.email}</p>
            </div>
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="rounded-full w-20"
            />
          </li>
        </Link>
      ))}
    </div>
  );
}