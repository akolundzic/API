// class Inputget extends React.Component {
//   constructor(inputform) {
//     super(inputform);
//     this.value = inputform;
//   }
//   getInputvalue() {
//     return this.value;
//   }
// }

const Header = ({ handleChange, inputform, handleClick, setInputform }) => {
  setInputform(inputform);
  return (
    <header>
      <nav>
        <ul className="menu">
          <li>
            <a id="a" href="#">
              Home
            </a>
          </li>
          <li>
            <a id="a" href="#">
              Stories
            </a>
          </li>
          <li>
            <a id="a" href="#">
              News
            </a>
          </li>
          <li>
            <a id="a" href="#">
              Contact
            </a>
          </li>
          <li>
            <form>
              {/* <UserContext.Provider value={inputform.value}> */}
              <input
                id="input"
                type="text"
                placeholder="Search..."
                value={inputform}
                onChange={handleChange}
              />
              {/* </UserContext.Provider> */}
            </form>
          </li>
          <li>
            <button id="inputbutton" onClick={handleClick} type="submit">
              <i className="fa fa-plus  inpuntbutton">Search</i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
