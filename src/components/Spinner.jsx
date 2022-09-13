import React from 'react';
import Loader, { Audio } from 'react-loader-spinner';

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      {/* <Loader
        type="Blocks"
        color="#00BFFF"
        height={50}
        width={200}
        className="m-5"
      /> */}
      <img class="h-12 w-12" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
      <p className="text-lg text-center px-2 mt-4">{message}</p>
    </div>
  );
}

export default Spinner;
