import React, { useEffect, useState } from "react";

function App() {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const { width, height } = pageSize;

  const handleResize = () => {
    setPageSize((prev) => ({
      ...prev,
      width: window.innerWidth,
      height: window.innerHeight,
    }));

    if (width >= 320) document.body.style.background = "#0D98BA";
    if (width >= 375) document.body.style.background = "#004E64";
    if (width >= 426) document.body.style.background = "#6C0075";
    if (width >= 768) document.body.style.background = "#009B77";
    if (width >= 1024) document.body.style.background = "#E74C3C";
    if (width >= 1440) document.body.style.background = "#2b90d9";
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div>
      <div>Width : {width}</div>
      <div>Height : {height}</div>
    </div>
  );
}

export default App;
