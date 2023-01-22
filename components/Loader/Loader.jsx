import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

function Loader({ loading }) {
  return (
    <div className="flex flex-col justify-center items-center align-middle min-h-screen ">
      <BounceLoader
        color="#5258fb"
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
