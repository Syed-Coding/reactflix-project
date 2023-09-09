import Wrapper from "./Wrapper";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to="/">
              <img src={Logo} alt="react-flix" width={96} />
            </Link>

            <Link to="/favorites">
              <div className="favCount">
                <span className="count"> 0 </span>
                Favorites
              </div>
            </Link>
          </div>
          <div className="searchBox">
            <input className="searchField" type="search" />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
