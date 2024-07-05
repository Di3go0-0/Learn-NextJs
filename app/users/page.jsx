import Users from '@/components/Users/Users'

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data.data);

  return data.data;
}

export default async function HomePage() {
  const users = await fetchUsers();

  return (
    <Users users={users} />
  );
}
