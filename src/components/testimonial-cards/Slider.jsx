import React, { useState, useEffect } from "react";
import "./Slider.css";
import data from './Data'

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, profession, text } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
                <p className="text inter pb-10">{text}</p>
                <img src={image} alt={name} className="person-img mx-auto mt-5" />
                <h4 className="font-bold inter text-black text-[20px] italic mt-10">{name}</h4>
                <p className="title inter text-[20px] italic text-black">{profession}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
            <ion-icon name="chevron-back"></ion-icon>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
            <ion-icon name="chevron-forward"></ion-icon>
        </button>
      </div>
    </section>
  );
};

export default Slider;
