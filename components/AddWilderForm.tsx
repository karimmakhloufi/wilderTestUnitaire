import axios from "axios";
import { useState } from "react";

function hasProp<K extends PropertyKey>(data: object, prop: K): data is Record<K, unknown> {
  return prop in data;
}

interface ITrigger {
  trigger : number;
  setTrigger : ( trigger: number) => void;
}

export default function AddWilderForm({ trigger, setTrigger }: ITrigger) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [votes, setVotes] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          /*  setError(false) */
          const result = await axios.post(
            "http://localhost:3005/api/wilder/create",
            {
              name: name,
              city: city,
              skills: [{ title: title, votes: votes }],
            }
          );
          console.log(result);
          if (result.data.success) {
            setError(result.data.message + `${name}`) ;
            console.log(result.data.message);
          } else if (result.data.success === false) {
            setError(result.data.message);
            console.log(result.data.message);
          }
          setTrigger(trigger + 1);
        } catch (error: any) {
          if (error.response) {
            setError(error.response.data.message);
            console.log(error.response);
          } else {
            setError(error.message);
          }
        }
      }}
    >
      {error ? <p>{error}</p> : null}

      {/* {error !== "" && <p>{message}</p>} */}
      <label htmlFor="name-input">Name :</label>
      <input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="city-input">City :</label>
      <input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label htmlFor="city-input">Title :</label>
      <input
        id="city-input"
        type="text"
        placeholder="Type the skill"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="city-input">Votes :</label>
      <input
        id="city-input"
        type="number"
        placeholder="Type the votes"
        value={votes}
        onChange={(e) => setVotes(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
