import PropTypes from 'prop-types';

export const Filter = ({ filter, changeFilterInput }) => (
  <label>
    <input
      type="text"
      name={filter}
      onChange={changeFilterInput}
      placeholder="Find contacts by name"
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilterInput: PropTypes.func,
};
