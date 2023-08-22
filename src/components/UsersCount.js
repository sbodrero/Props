import React from 'react';
import PropTypes from 'prop-types';
import usersIcon from '../assets/images/users-group.png';

export default function UsersCount({ users = [], getUsersCount = f => f }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <img src={usersIcon} title="Icon users" alt="Icon users" width="50px" style={{ verticalAlign: 'middle '}}/>
      <span style={{ color: 'blue', paddingLeft: '10px' } }>Nombre d'utilisateurs: {getUsersCount(users)}</span>
    </div>
  )
}

UsersCount.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    country: function(props, propName, componentName) {
      const allowedCountries = ['France', 'Allemagne', 'Italie', 'Turquie'];
      if(!allowedCountries.includes(props[propName])) {
        return new Error(
          `Invalid prop ${propName} supplied to ${componentName} Validation failed`
        );
      }
    }
  })),
  getUsersCount: PropTypes.func.isRequired
};
