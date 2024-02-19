import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DropRegions = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/ee/v1/regions")
      .then((response) => {
        setRegions(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="regions">
      <select>
        <option value="">Select Region</option>
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropRegions;
