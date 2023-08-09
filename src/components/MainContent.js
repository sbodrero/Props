import React from 'react';
import UserCount from './UserCount';
import UsersList from './UsersList';

export default function MainContent({ users, getUsersCount, title, year, style }) {
  return (
    <div style={style}>
      <h1>Accueil</h1>
      <h2>{title} of {year}</h2>
      <UserCount users={users} getUsersCount={getUsersCount} />
      <UsersList users={users} />
    </div>
  )
}
