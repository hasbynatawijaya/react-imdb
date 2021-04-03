import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const useFetch = (action, args = []) => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("fetching");
        await dispatch(action);
        setStatus("fetched");
      } catch (error) {
        setStatus("error");
      }
    };
    fetchData();
  }, args);
  return { status };
};

export default useFetch;
