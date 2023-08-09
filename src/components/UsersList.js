import React from 'react';

export default function UsersList({ users }) {
  console.log(users);
  return (
    <div style={{ backgroundColor: 'green', padding: '50px' }}>
      {users.length > 0 && (
          <ul>
            {users.map(user => <li key={user.name}>Prénom: {user?.name} - Ville: {user?.city}</li>)}
          </ul>
        )
      }
    </div>
  )
};
