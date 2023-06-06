import { Link } from "react-router-dom";

function NavBar({ resetVideos }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger sticky-top">
      <div className="container-fluid">
        <div className="row">
          <Link
            className="navbar-brand"
            onClick={resetVideos}
            to="/"
            style={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            YouTube
          </Link>
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              onClick={resetVideos}
              aria-current="page"
              to="/"
              style={{ color: "white", fontSize: "1.2rem", paddingTop: "10px" }}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              onClick={resetVideos}
              to="/about"
              style={{ color: "white", fontSize: "1.2rem", paddingTop: "10px" }}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
