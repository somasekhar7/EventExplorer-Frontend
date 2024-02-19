import "./polling.css";
import DropCategories from "./dropdowncategories";
import DropArtists from "./dropArtists";
import DropRegions from "./dropRegions";
import DropCounties from "./dropcounties";

function UserPoll() {
  return (
    <div className="user-poll">
      <div className="categories">
        <p>Categories</p>
        <DropCategories />
      </div>
      <div className="artist">
        <p id="art">Artist</p>
        <DropArtists />
      </div>
      <div className="region">
        <p id="region">Region</p>
        <DropRegions />
      </div>
      <div className="county">
        <p id="county">County</p>
        <DropCounties />
      </div>
      <div>
        <button type="submit" id="btnSubmit">
          Submit Poll
        </button>
      </div>
    </div>
  );
}

export default UserPoll;
