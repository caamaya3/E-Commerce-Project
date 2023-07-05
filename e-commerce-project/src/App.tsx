import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import CardGroup from "./components/CardGroup";
import Card from "./components/Card";
import cardData from "./components/cards";
export default function App(props: any) {
  const [searchText, setSearchText] = useState("");
  function handleChange(event: any) {
    setSearchText(event.target.value);
  }
  const [cardArray, setCardsArray] = useState(props.initialCards);

  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
    const filteredCards = props.initialCards.filter(
      (card: any) =>
        card.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        card.description.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCardsArray(filteredCards);
  };
  function handleSubmit() {}
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
            onChange={handleSearch}
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
      <CardGroup cards={cardArray}></CardGroup>
    </>
  );
}
