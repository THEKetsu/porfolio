import styles from './Home.module.css';
import Image from 'next/image';
export default function Home() {

  return (
    <div className={styles.container}>
      {/* Name + Title(job) + Description + Contact Button*/}
      <div className={styles.left}>
        <div className={styles.header}>
          <h1 className={styles.name}>Quentin BENDER</h1> 
          <h2 className={styles.title}>Software Engineer</h2>
        </div>
        <div className={styles.middle}>
            <p className={styles.description}>
              Ingénieur DevSecOps débutant, passionné par la cybersécurité et le développement web.
            </p>
            <p className={styles.description}>
              Récemment diplômé en cybersécurité, je suis prêt à mettre mes compétences au service de vos projets innovants.
            </p>
        </div>
      <button className={styles.contact}>Contact me</button>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.image}
          src="https://avatars.githubusercontent.com/u/32210803?v=4"
          alt="Quentin BENDER"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
