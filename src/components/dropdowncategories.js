import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DropCategories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/ee/v1/categories")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching the data:", error);
      });
  }, []);

  return (
    <div>
      <select className="selection">
        <option>Select your category</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropCategories;
