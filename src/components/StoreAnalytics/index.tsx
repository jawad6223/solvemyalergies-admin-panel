"use client"

import { useState } from "react";
import BreadCrum from "./BreadCrum";

const StoreAnalytics: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm)

  return (
    <div className="">
      <BreadCrum onSearch={setSearchTerm}  />
    </div>
  );
};

export default StoreAnalytics;
