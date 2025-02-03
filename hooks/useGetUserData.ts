import { useEffect, useState } from "react";

const useGetUserData = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState<number>(1);

  useEffect(() => {
    fetchApiData();
  }, [userId]);

  const fetchApiData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };

  return { data, isLoading, userId, setUserId };
};

export default useGetUserData;
