import React from "react";
import { v4 as uuidv4 } from "uuid";

const AnimatedBackground: React.FC = (): JSX.Element => {
  return (
    <>
      {Array(10)
        .fill(1)
        .map(() => (
          <li key={uuidv4()}></li>
        ))}
    </>
  );
};

export default AnimatedBackground;
