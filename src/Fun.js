import axios from "axios";
import React, { useEffect, useState } from "react";
const Fun = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    axios
      .get("https://v2.jokeapi.dev/joke/Programming")
      .then((Response) => {
        if (Response.data.type === "twopart") {
          setJoke(`${Response.data.setup} ${Response.data.delivery} `);
        } else {
          setJoke(Response.data.joke);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const HandleNewJoke = () => {
    axios
      .get("https://v2.jokeapi.dev/joke/Programming")
      .then((Response) => {
        if (Response.data.type === "twopart") {
          setJoke(`${Response.data.setup} ${Response.data.delivery} `);
        } else {
          setJoke(Response.data.joke);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="block">
      {/* <h2>Programming Joke Generator</h2>
      <p>{joke}</p>
      <button onClick={HandleNewJoke}>New Joke</button> */}

      <div className="container">
        <div className="terminal_toolbar">
          <div className="butt">
            <button className="btn btn-color"></button>
            <button className="btn"></button>
            <button className="btn"></button>
          </div>
          <p className="user">Programming Joke Generator ~</p>
        </div>
        <div className="terminal_body">
          <div className="terminal_promt">
            <span className="terminal_user">;)</span>
            <span className="terminal_bling">{joke}</span> <br />
          </div>
          <br />
          <button onClick={HandleNewJoke}>New Joke</button>
        </div>
      </div>
    </div>
  );
};

export default Fun;
