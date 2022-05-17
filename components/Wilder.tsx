import Image from "next/image";
import blank_profile from "../public/blank_profile.png";
import Skill, { ISkill }  from "./Skill";
import styles from '../styles/Wilder.module.css'
import DeleteButtonWilder from "./ButtonDeleteWilder";

export interface IWilder {
  setTrigger: React.Dispatch<React.SetStateAction<any>>;
  _id: string
  name: string;
  city: string;
  skills:ISkill[];
}

export default function Wilder({_id, name, city, skills, setTrigger} : IWilder) {
  return (
    <div className={styles.margin}>
      <article className={styles.card}>
        <Image src={blank_profile} alt="Jane Doe Profile" />
        <h3 className={styles.cardh3h4}>{name} from {city} </h3>
       
        <p className={styles.pRed}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4 className={styles.cardh3h4}>Wild Skills</h4>
        <ul className={styles.skills}>
          {skills.map((skill, index) => {
            return <Skill key={index} title={skill.title} votes={skill.votes}  />;
          })}
        </ul>
        <DeleteButtonWilder _id={_id} setTrigger={setTrigger}/>
      </article>
      
    </div>
  );
}
