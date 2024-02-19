import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DropCounties = () => {
  const [countyList, setCountyList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/ee/v1/counties")
      .then((response) => {
        setCountyList(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  });

  return (
    <div>
      <select>
        <option>Select your county</option>
        {countyList.map((county) => (
          <option key={county.id} value={county.id}>
            {county.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropCounties;
