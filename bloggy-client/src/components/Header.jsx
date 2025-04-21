import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="/assets/bloggy.png" alt="logo" />
      </Link>
      <Link className="createpost" to="/create">
        Create Blog
      </Link>

    </header>
  );
};

export default Header;
