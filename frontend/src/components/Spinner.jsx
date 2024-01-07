import React from "react";

const Spinner = () => {
  return (
    <div className="flex py-8 my-4 justify-center">
      <div className="h-20 w-20 border-gray-300 rounded-full animate-spin border-8 border-t-blue-500"></div>
    </div>
  );
};

export default Spinner;
