import React, { useEffect, useRef, useState } from "react";
import "./Titlecards.css";
import cards_data from "../../assets/Cards_data";
import Player from "../../pages/Player/Player";
import {Link} from 'react-router-dom'
const Titlecard = (props) => {
  const [apidata, setapidata] = useState([]);

  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDFjNWMyNmQ4MTE4OTg2MmYwNGNjZjEwY2E2NDQwMyIsIm5iZiI6MTc1MjI1MjE2MC45NzMsInN1YiI6IjY4NzEzZjAwN2I3NjJhZWY3MjlhNWE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aMmebjB3YHKKFWQnZvVy9-6Wx2FIkbhz-vSQnwynrfI",
    },
  };
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
    fetch(
      `https://api.themoviedb.org/3/movie/${props.category}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapidata(res.results))

      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="title-cards">
      <h2>{props.title ? props.title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card, i) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={i}>
              <img
                src={`https://image.tmdb.org/t/p/original` + card.backdrop_path}
              />{" "}
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecard;
