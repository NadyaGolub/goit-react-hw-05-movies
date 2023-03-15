import PropTypes from 'prop-types';

function Error({ error }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Something went wrong!</h1>
      <p>{error}</p>
    </div>
  );
}

Error.propTypes = {
  Error: PropTypes.string,
};

export default Error;