import React from "react";
import Greeting from "../../containers/greeting/Greeting";

const Home = ({ theme }) => {
  return (
    <div>
      <Greeting theme={theme} />
    </div>
  );
};

export default Home;
