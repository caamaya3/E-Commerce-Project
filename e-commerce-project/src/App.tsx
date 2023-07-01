import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import CardGroup from "./components/CardGroup";
import Card from "./components/Card";
import cardData from "./components/cards";
export default function App() {
  const [searchText, setSearchText] = useState("");
  function handleChange(event: any) {
    setSearchText(event.target.value);
  }
  function handleSubmit() {
    alert(searchText);
  }
  const cardsArray = cardData.data.cards;

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
      <CardGroup cards={cardsArray}></CardGroup>{" "}
    </>
  );
}
