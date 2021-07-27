import React from "react";
import Header from "../../components/header/header";
import Greeting from "../../containers/greeting/Greeting";

const Home = ({ theme }) => {
  return (
    <div>
      <Header theme={theme} />
      <Greeting theme={theme} />
    </div>
  );
};

export default Home;
