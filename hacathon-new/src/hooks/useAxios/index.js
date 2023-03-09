import { useState, useEffect } from "react";
import axios from "../../lib/axios";
export const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const fetchData = async (configObj) => {
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const result = await axios.request({ ...configObj, signal: ctrl.signal });
      console.log(result.data);
      setResponse(result.data);
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // useEffect cleanup function
    return () => controller && controller.abort();
  }, [controller]);

  return {
    fetchData,
    response,
    error,
    loading,
  };
};
export default useAxios;
