import axios from 'axios';

export default function fetch(options) {
  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        const defaultError = {
          code: err,
          status: 'error',
          message: err.message
        };

        if (typeof err.response === 'undefined') reject(defaultError);
        else if (typeof err.response.data === 'undefined') reject(defaultError);
        else reject(err.response.data);
      });
  });
}
