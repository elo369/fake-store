import React from "react";
import SubTotalSidebar from "./SibeTotalSideBar";
import CartBody from "./CartBody";

const Home = () => {
  return (
    <div className="flex">
      <CartBody />
      <div>
        <SubTotalSidebar />
      </div>
    </div>
  );
};

export default Home;