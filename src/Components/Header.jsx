import Wrapper from "./Wrapper";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { SearchBox } from "./SearchBox";
import { useGlobalContext } from "../Context/Context";

function Header() {
  const { state } = useGlobalContext();
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
                <span className="count"> {state.favorites.length}</span>
                Favorites
              </div>
            </Link>
          </div>
          <SearchBox></SearchBox>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
