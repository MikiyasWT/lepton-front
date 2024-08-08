import axios from 'axios';


const api = axios.create({
    
  baseURL: "https://lepton-backend.onrender.com/api",
  headers: {
    'Content-Type': 'application/json',
    // 'Cookie':`token=${getAuthToken()}`
    'Accept': 'application/json',
  //  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjk1MDI4ODM3LCJleHAiOjE2OTUwMzI0Mzd9.WHvIPmJ870lPYWf-TLFjQt6om3QAT7Zqh59ULSR8tcg'
    
    // Other common headers...
  },
});

// Request interceptor




// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Modify the response object before returning the data
    return response;
  },
  (error) => {
    // Handle response error
    //console.error('Response error:', error);
    return Promise.reject(error);
  }
);

export default api;