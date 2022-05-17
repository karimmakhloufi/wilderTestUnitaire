import Wilder, { IWilder } from "../components/Wilder";
import styles from "../styles/Index.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AddWilderForm from "../components/AddWilderForm";

const Home = () => {
  const [wilders, setWilders] = useState<IWilder[]>([]);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3005/api/wilder/read");
        setWilders(result.data.result);
        //console.log(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [trigger]);

  return (
    <div>
      <header>
        <div className={styles.container}>
          <h1 className={styles.title}>Wilders Book Typescript</h1>
        </div>
      </header>

      <main className={styles.main}>
        <AddWilderForm trigger={trigger} setTrigger={setTrigger} />
        <h2>Wilders</h2>
        <section className={styles.cardRow}>
          {wilders.map((wilder, index) => {
            return (
              <Wilder
                setTrigger={setTrigger}
                _id={wilder._id}
                key={index}
                name={wilder.name}
                city={wilder.city}
                skills={wilder.skills}
              />
            );
          })}
        </section>
      </main>

      <footer>
        <div className={styles.container}>
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
