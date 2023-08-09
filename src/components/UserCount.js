import usersIcon from '../assets/images/users-group.png';
import React from 'react';

export default function UserCount({ users }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <img src={usersIcon} title="Icon users" alt="Icon users" width="50px" style={{ verticalAlign: 'middle '}}/>
      <span style={{ color: 'blue', paddingLeft: '10px' } }>Nombre d'utilisateurs: {users.length}</span>
    </div>
  )
}
