import React from 'react';
import UsersCount from './UsersCount';
import UsersList from './UsersList';

export default function MainContent({ users = [], getUsersCount = f => f, title, year, style }) {
  return (
    <div style={style}>
      <h1>Accueil</h1>
      <h2>{title} of {year}</h2>
      <UsersCount users={users} getUsersCount={getUsersCount} />
      <UsersList users={users} />
    </div>
  )
}
