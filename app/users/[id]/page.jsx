import Link from "next/link";

async function fetchUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  //   console.log(data.data);
  return data.data;
}

export default async function UserPage({ params }) {
  const user = await fetchUser(params.id);
  console.log(user);
  return (
    <main>
      <div className="bg-slate-500 p-10 rounded-md">
        <img src={user.avatar} alt={user.first_name} className="m-auto my-4" />
        <h3 className="text-3xl font-bold">
          {user.id} Name : {user.first_name} {user.last_name}
        </h3>
        <p>Email : {user.email}</p>
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          href="/users"
          className="inline-flex items-center rounded-md bg-slate-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          prefetch={false}
        >
          <p>All users</p>
        </Link>
      </div>
    </main>
  );
}