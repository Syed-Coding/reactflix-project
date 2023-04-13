import Wrapper from "./Wrapper";

function Header() {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <h1>React Flix</h1>
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
