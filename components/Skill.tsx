import styles from '../styles/skill.module.css'


export interface ISkill {
  title: string;
  votes: number;
}

export default function Skill({title, votes}: ISkill) {
  return (
    <div>
      <li className={styles.li}>
        {title}
        <span className={styles.votes}> {votes}</span>
      </li>
    </div>
  );
}
