import { useEffect, useState } from "react";

const useCredits = () => {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCredits = async () => {
      const response = await fetch(
        "https://mock.apidog.com/m1/499449-0-default/credits"
      );
      const data = await response.json();
      setCredits(data.credits);
      setLoading(false);
    };
    fetchCredits();
  }, []);

  return { loading, credits };
};

export default useCredits;
