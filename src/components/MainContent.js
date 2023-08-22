import React from 'react';
import PropTypes from 'prop-types';

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

MainContent.propTypes = {
  list: PropTypes.element,
  count: PropTypes.element,
  title: PropTypes.string,
  year: PropTypes.number,
  style: PropTypes.object,
}
