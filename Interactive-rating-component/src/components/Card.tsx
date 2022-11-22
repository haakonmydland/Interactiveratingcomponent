import style from "../css/Card.module.css";
import { CardInterface, FunctionEvent } from "../types";
import icon from "../assets/icon-star.svg";
import illustration from "../assets/illustration-thank-you.svg";
import { useState } from "react";

export default function Card({
  title,
  paragraph,
  btnTxt,
  endTitle,
  endParagraph,
}: CardInterface) {
  const [active, setActive] = useState([false, false, false, false, false, 0]);
  const [rating, setRating] = useState({ active: false });

  function setActiveWrapper(e: FunctionEvent) {
    setActive((prev) => {
      return [
        (prev[0] = e.target.id - 1 == 0),
        (prev[1] = e.target.id - 1 == 1),
        (prev[2] = e.target.id - 1 == 2),
        (prev[3] = e.target.id - 1 == 3),
        (prev[4] = e.target.id - 1 == 4),
        (prev[5] = parseInt(e.target.id)),
      ];
    });
  }
  function submit() {
    console.log("testing");
    if (active[5] !== 0) {
      setRating(() => {
        return { active: true };
      });
    }
  }

  return (
    <div className="container">
      {!rating.active ? (
        <div className={style.card}>
          <img className={style.icon} src={icon} alt="Star Icon" />
          <h1 className={style.title}>{title ? title : "title"}</h1>
          <p className={style.paragraph}>
            {paragraph ? paragraph : "paragraph"}
          </p>
          <form className={style.ratingContainer}>
            <label
              htmlFor="1"
              className={active[0] ? style.active : style.ratingBtn}
            >
              1
              <input
                id="1"
                name="rating"
                type="radio"
                className={style.radioInput}
                onInput={setActiveWrapper}
              ></input>
            </label>
            <label
              htmlFor="2"
              className={active[1] ? style.active : style.ratingBtn}
            >
              2
              <input
                id="2"
                name="rating"
                type="radio"
                className={style.radioInput}
                onInput={setActiveWrapper}
              ></input>
            </label>
            <label
              htmlFor="3"
              className={active[2] ? style.active : style.ratingBtn}
            >
              3
              <input
                id="3"
                name="rating"
                type="radio"
                className={style.radioInput}
                onInput={setActiveWrapper}
              ></input>
            </label>
            <label
              htmlFor="4"
              className={active[3] ? style.active : style.ratingBtn}
            >
              4
              <input
                id="4"
                name="rating"
                type="radio"
                className={style.radioInput}
                onInput={setActiveWrapper}
              ></input>
            </label>
            <label
              htmlFor="5"
              className={active[4] ? style.active : style.ratingBtn}
            >
              5
              <input
                id="5"
                name="rating"
                type="radio"
                className={style.radioInput}
                onInput={setActiveWrapper}
              ></input>
            </label>
          </form>
          <button className={style.submitBtn} onClick={submit}>
            {btnTxt ? btnTxt : "Submit"}
          </button>
        </div>
      ) : (
        <div className={style.centeredCard}>
          <img
            className={style.illustration}
            src={illustration}
            alt="Star Icon"
          />
          <div className={style.choice}>You selected {active[5]} out of 5</div>
          <h1 className={style.centeredTitle}>
            {endTitle ? endTitle : "Endcard Title"}
          </h1>
          <p className={style.centeredPara}>
            {endParagraph ? endParagraph : "End card paragraph"}
          </p>
        </div>
      )}
    </div>
  );
}
