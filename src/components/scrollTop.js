import React, { useEffect, useState } from "react";

import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollTop = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };

  return (
    <div className="scrollTop">
      {showScrollUp && (
        <FaAngleDoubleUp className="scroll-btn" onClick={scrollTop} />
      )}
      
    </div>
  );
};

export default ScrollTop;
