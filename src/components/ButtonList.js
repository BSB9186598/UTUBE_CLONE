import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Mixes",
    "Bodybuilding",
    "Computers",
    "Motivation",
    "Live",
    "News",
    "Music",
    "MotorCycling",
    "Comedy clubs",
    "Tv Series",
    "Stock market",
  ];
  return (
    <div className="overflow-auto flex flex-wrap">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
