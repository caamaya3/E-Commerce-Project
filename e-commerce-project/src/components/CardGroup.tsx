import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardGroup = (props: any) => {
  const [numCardsPerLine, setNumCardsPerLine] = useState(2);
  console.log("Card grouo");
  console.log(props.cards[0].title);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        setNumCardsPerLine(3);
      } else if (screenWidth >= 576) {
        setNumCardsPerLine(2);
      } else {
        setNumCardsPerLine(1);
      }
    };

    handleResize(); // Call handleResize initially to set the initial numCardsPerLine value
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const blocks = [];
  const blockSize = numCardsPerLine;
  for (let i = 0; i < props.cards.length; i += blockSize) {
    const block = props.cards.slice(i, i + blockSize);
    blocks.push(block);
  }

  return (
    <div className="card-group">
      {blocks.map((block, index) => (
        <div key={index} className="card-block">
          {block.map((props: any) => (
            <Card key={props.id} {...props} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
