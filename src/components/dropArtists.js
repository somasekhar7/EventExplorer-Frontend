import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DropArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/ee/v1/artists")
      .then((response) => {
        setArtists(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="drop-down">
      <select name="artist" id="artistSelect">
        <option>Select your artist</option>
        {artists.map((person) => (
          <option key={person.id} value={person.id}>
            {person.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropArtists;
