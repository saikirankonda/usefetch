import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentpage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fechUrl = await axios.get(url);
        setData(fechUrl?.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };
    fetchData();
  }, [url]);

  const totalpages = Math.ceil(data?.length / itemsPerPage);

  const paginationData = data?.slice(
    (currentpage - 1) * itemsPerPage,
    currentpage * itemsPerPage
  );

  const pages = Array?.from({ length: totalpages }, (_, index) => index + 1);
  return {
    isLoading,
    error,
    paginationData,
    handlePrev,
    handleNext,
    pages,
    currentpage,
    setCurrentPage,
    totalpages
  };
};

export default useFetch;
