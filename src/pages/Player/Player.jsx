import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {
  const { videoid } = useParams();
  const navigate=useNavigate()
  const [id, setid] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDFjNWMyNmQ4MTE4OTg2MmYwNGNjZjEwY2E2NDQwMyIsIm5iZiI6MTc1MjI1MjE2MC45NzMsInN1YiI6IjY4NzEzZjAwN2I3NjJhZWY3MjlhNWE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aMmebjB3YHKKFWQnZvVy9-6Wx2FIkbhz-vSQnwynrfI",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${videoid}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setid(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow} alt="" onClick={()=>{navigate(-2)}} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${id.key}`}
        title="trailer"
        frameBoder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{id.published_at.slice(0, 10)}</p>
        <p>{id.name}</p>
        <p>{id.type}</p>
      </div>
    </div>
  );
};

export default Player;
