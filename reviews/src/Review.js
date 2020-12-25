import React, { useState } from "react";
import people from "./data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [index, setindex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNum = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setindex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  };

  const prevPerson = () => {
    setindex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * 4);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setindex(checkNum(randomNum));
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronCircleLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronCircleRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          suprise me
        </button>
      </article>
    </>
  );
};

export default Review;
