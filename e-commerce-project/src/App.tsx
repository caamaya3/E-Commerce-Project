import "./App.css";
import { useState } from "react";
import Hero from "./components/hero";

export default function App() {
  const [searchText, setSearchText] = useState("");
  function handleChange(event: any) {
    setSearchText(event.target.value);
  }
  function handleSubmit() {
    alert(searchText);
  }

  return (
    <>
      <header>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2202px-Dropbox_Icon.svg.png"
          alt="logo"
          height={40}
        ></img>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            className="search-bar"
            type="search"
            placeholder="Search"
            onChange={handleChange}
            value={searchText}
          />
        </form>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Features</li>
            <li>Cart</li>
          </ul>
        </nav>

        <a>
          <button>Contact</button>
        </a>
      </header>
      <Hero></Hero>
    </>
  );
}
