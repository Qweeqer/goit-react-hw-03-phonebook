import PropTypes from 'prop-types';

import './Filter.module.css';

export const Filter = ({ filter, changeFilterInput }) => (
  <label>
    <input
      type="text"
      name={filter}
      onChange={changeFilterInput}
      placeholder="Find contacts by name or number"
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilterInput: PropTypes.func,
};
