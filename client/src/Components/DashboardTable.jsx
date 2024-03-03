import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
  getDashboard,
  deleteUrl,
  searchUrl,
} from '../Redux/actions/dashboard.actions';
import PropTypes from 'prop-types';



const DashboardTable = ({ dashboard, getDashboard, deleteUrl, searchUrl }) => {
  const [search, setSearch] = useState('');
  const [baseUrl] = useState(() =>
  import.meta.env.MODE === 'production'
      ? window.location.hostname
      : window.location.hostname + ':' + window.location.port
  );

  useEffect(() => {
    getDashboard();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const clearSearch = () => {
    window.location.reload();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUrl(search);
  };

  return dashboard.loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Form className='my-4' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
          <Form.Label> Search by Long URL :</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter long url to search'
            name='search'
            value={search}
            onChange={(e) => handleChange(e)}
            style={{ width: '22rem' }}
          />
        </Form.Group>
        <Button variant='secondary' type='submit'>
          Search
        </Button>
        <Button
          variant='secondary'
          className='ml-4'
          onClick={() => clearSearch()}
        >
          Clear
        </Button>
      </Form>
      <div className="card mb-3" style={{backgroundColor : '#1B2432', borderRadius : '10px'}}>
        {dashboard.urls.map((url) => (
          <div key={url._id}>
            <div className="card-header text-white" style={{backgroundColor : '#2C2B3C', borderTopRightRadius : '10px', borderTopLeftRadius : '10px'}}>Your URL</div>
            <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                <h5 className="card-title">
                  <strong className="text-primary">Long URL</strong>
                  {"  "}
                  <small style={{ cursor: "pointer" }} className="text-sm">
                    <a href={url.longUrl}>{url.longUrl}</a>
                  </small>
                </h5>
              </div>
              <p className="card-text">
                <a href={`/${url.shortUrl}`}>{`${baseUrl}/${url.shortUrl}`} </a>
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${baseUrl}/${url.shortUrl}`.trim()
                  );
                  toast.success("Copied");
                }}
                className="btn btn-sm btn-primary px-4 rounded-pill"
              >
                Copy
              </button>
              <button onClick={() => deleteUrl(url._id)} className="btn btn-sm btn-danger mx-2 px-4 rounded-pill">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDashboard: () => dispatch(getDashboard()),
    deleteUrl: (id) => dispatch(deleteUrl(id)),
    searchUrl: (longUrl) => dispatch(searchUrl(longUrl)),
  };
};


DashboardTable.propTypes = {
  dashboard: PropTypes.object.isRequired,
  getDashboard: PropTypes.func.isRequired,
  deleteUrl: PropTypes.func.isRequired,
  searchUrl: PropTypes.func.isRequired,
};

// Adding a name to the component
const ConnectedDashboardTable = connect(mapStateToProps, mapDispatchToProps)(DashboardTable);

export default ConnectedDashboardTable;
