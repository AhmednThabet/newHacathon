import { useState, useEffect } from "react";
import axios from "../../lib/axios";
export const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (configObj) => {
    try {
      setLoading(true);

      const result = await axios.request({ ...configObj });
      setResponse(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
      setError(err.response);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchData,
    response,
    error,
    loading,
  };
};
export default useAxios;
