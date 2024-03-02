import { useState, useEffect } from 'react';
import Api from '../Services';
import PropTypes from 'prop-types';

const RedirectTo = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { shortUrl } = props.match.params;
        const { data } = await Api.redirect(shortUrl);
        console.log(data);
        setLoading(false);
        window.location.href = data.longUrl;
      } catch (error) {
        console.error(error);
        setLoading(false);
        window.location.href = '/not/found';
      }
    })();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <div className='center-content' style={{ fontSize: '1.2rem' }}>
      Redirecting....
    </div>
  ) : null;
};



RedirectTo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      shortUrl: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RedirectTo;
