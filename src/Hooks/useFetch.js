// hooks are simple javascript functions
//repeat ayi verunnath nammak custom hooks use chyyam but name start with use
import axios from "axios";
import { useState, useEffect } from "react";
export const useFetch = (url, customParams = {}) => {
  const [data, setData] = useState({}); // here data contains totalpages and results
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("inside usefetch");

  const options = {
    method: "get",
    baseURL: "https://api.themoviedb.org/3/",
    url: url,
    params: {
      api_key: "e3ef60114f3455d412ea55db83f798b2",
      ...customParams, // spreading occurs so , page : 1 , example below
      //const p = {page: 1 ,syed : 60 }
      // const m =  {john : 'lonely',...p}
      // console.log(m)
    },
  };
  console.log("custom parmas", customParams);
  const { page } = customParams; // destructing for page dpenedency array

  useEffect(() => {
    console.log("inside useEffect");
    const fetchData = async () => {
      try {
        let { data } = await axios(options);
        setData(data);
        setLoading(false);
      } catch ({ message }) {
        setError(message);
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return [data, loading, error];
};
