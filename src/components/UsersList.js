import React from 'react';

export default function UsersList({ users }) {
  return (
    <div style={{ backgroundColor: 'green', padding: '50px' }}>
      {users.length > 0 && (
          <ul>
            {users.map(user => <li>Prénom: {user?.name} - Ville: {user?.city}</li>)}
          </ul>
        )
      }
    </div>
  )
};
