interface User {
  id: number,
  name: string,
  email: string,
}


const UserPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user =><tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  
              </tr> )}
              </tbody>
            </table>
        </div>
    </>
  )
}

export default UserPage;