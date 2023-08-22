import React from 'react';

export default function MainContent({ list, count, title, year, style }) {
  return (
    <div style={style}>
      <h1>Accueil</h1>
      <h2>{title} of {year}</h2>
      {count}
      {list}
    </div>
  )
}
