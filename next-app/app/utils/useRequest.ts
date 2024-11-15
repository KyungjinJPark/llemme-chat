import axios from 'axios';
import { useState } from 'react';

/**
 * Makes a request to an endpoint
 */
const useRequest = (method: string, url: string, body: object): [() => void, any, any, boolean] => {
  const [response, setResponse] = useState<null | any>(null);
  const [error, setError] = useState<any | any>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true)
    axios.request({
      method, url, data: body
    })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // custom hook return values
  return [fetchData, response, error, loading];
};

export default useRequest;