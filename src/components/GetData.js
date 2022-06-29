import React, { useEffect } from "react";

const GetData = ({ inputform, URL }) => {
  const stringurl = URL + inputform;

  return (
    <div>
      <ul id="ul">
        <li>console.log({stringurl});</li>
      </ul>
    </div>
  );
};

export default GetData;
