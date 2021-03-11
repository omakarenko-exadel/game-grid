import React from "react";
import "./StarterPage.scss";
import MainForm from "./MainForm";
import AnimatedBackground from "../../helper/AnimatedBackground";

const Starter: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <MainForm />
          <AnimatedBackground />
        </ul>
      </div>
    </>
  );
};

export default Starter;
