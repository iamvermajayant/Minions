// import axios from 'axios';

// const api = axios.create();

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// export default api;




import axios from 'axios';

const baseURL = import.meta.env.MODE === 'production'
  ? 'https://minions-hitp.onrender.com/'
  : 'http://localhost:5000';

const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
