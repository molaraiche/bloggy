import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [logged, setLogged] = useState(true);
  return (
    <header>
      <Link to="/">
        <img src="/assets/bloggy.png" alt="logo" />
      </Link>
      <Link className="createpost" to="/create">
        Create!
      </Link>

    </header>
  );
};

export default Header;
