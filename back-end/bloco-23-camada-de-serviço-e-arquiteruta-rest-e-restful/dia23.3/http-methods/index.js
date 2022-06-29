const axios = require('axios');

const API_TOKEN = '11111111111111111111111';

const headers = ({
  Authorization: API_TOKEN,
});

const body = ({
  o: 'o',
  p: 'p'
});

const get = async () => {
  try{
    const response = await axios.get('https://postman-echo.com/get', { headers });
    if(!response.statusText === 'OK') {
      return Promise.reject(response);
    }
    const { data } = response;
    console.log(data);
  } catch(err) {
    console.log(err);
  }
};

const post = async () => {
  try{
    const response = await axios.post('https://postman-echo.com/post?param1=teste', { headers, body });
    if(!response.statusText === 'OK') {
      return Promise.reject(response);
    }
    const { data } = response;
    console.log(data);
  } catch(err) {
    console.log(err);
  }
};



post();