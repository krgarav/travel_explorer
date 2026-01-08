export async function getServerSideProps() {
  const data = await fetch(
    "https://dummyjson.com/users?limit=5&skip=10"
  ).then(res => res.json());

  console.log("SERVER:", data); // terminal

  return {
    props: {
      users: data.users,
    },
  };
}

export default function Users({ users }: { users: any[] }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </ul>
  );
}
