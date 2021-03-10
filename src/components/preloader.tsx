import React from "react";
import { Lines } from "react-preloaders";

const Preloader: React.FC = (): JSX.Element => {
  return (
    <Lines
      animation="fade"
      time={2000}
      color="white"
      background="no-repeat 50% 5%/20% url('../src/assets/img/gameImg.png') #99f"
    />
  );
};

export default Preloader;
