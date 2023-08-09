import React from 'react';
import UserCount from './UserCount';
import UsersList from './UsersList';

export default function MainContent({ users }) {
  return (
    <div style={{ backgroundColor: 'white'}}>
      <h1>Accueil</h1>
      <h2>Liste des utilisateurs</h2>
      <UserCount users={users} />
      <UsersList users={users} />
    </div>
  )
}
