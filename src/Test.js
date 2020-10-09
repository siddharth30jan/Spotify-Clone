import React, { useState, useEffect } from "react";
import "./test.css";

function Test() {
  const [state, setState] = useState(() => {
    return 0;
  });

  useEffect(() => {
    alert("shdjhahkflds");
  }, [state]);

  return (
    <div className={`container ${state}`}>
      <button onClick={(e) => setState("switch")} className="button">
        CLICK!
      </button>
    </div>
  );
}

export default Test;
