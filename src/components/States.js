import { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(10);
  }, []);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
};

export default Count;
