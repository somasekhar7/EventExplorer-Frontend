import logo from "../images/logo.png";

function Navbar() {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" id="logo" />
      </div>
      <div class="logodetails">
        <a href="https://www.youtube.com/">
          <h6 id="details">Event Explore</h6>
          <h6 id="details">Host Events.Sell Tickets</h6>
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#Login">Login</a>
        </li>
        <li>
          <a href="#Register">Register</a>
        </li>
        <li>
          <a href="#Categories">Categories</a>
        </li>
        <button className="search-button" onClick={handleSearch}>
          Browse Events
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
