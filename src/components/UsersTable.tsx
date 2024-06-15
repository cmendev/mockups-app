'use client'

import { useEffect, useState } from "react";

interface User {
  email: string;
  name: string;
  lastname: string;
}

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const allUsers: User[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const user = localStorage.getItem(key);
        if (user) {
          allUsers.push(JSON.parse(user));
        }
      }
    }
    setUsers(allUsers);
  }, []);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Users!</h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Lastname</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
