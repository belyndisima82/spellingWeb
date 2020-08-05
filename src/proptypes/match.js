import PropTypes from 'prop-types';

const match = PropTypes.shape({
  params: PropTypes.object,
  isExact: PropTypes.bool,
  path: PropTypes.string,
  url: PropTypes.string,
});

match.defaultProps = {
  params: {},
  isExact: false,
  path: undefined,
  url: undefined,
};

export default match;
