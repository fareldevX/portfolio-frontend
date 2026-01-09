import useReveal from "../../Hooks/useReveal";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import styles from "./About.module.css";

function About() {
  useReveal(styles);

  return (
    <Section id="about" className={styles.aboutSection}>
      <Container className={styles.about}>
        <h2 className={styles.reveal} data-reveal>
          About Me
        </h2>

        <div className={`${styles.aboutIntro} ${styles.reveal}`} data-reveal>
          <div className={styles.aboutImage}></div>
          <p>
            I believe great digital products are built at the intersection of
            design, performance, and empathy.
          </p>
        </div>

        <div className={styles.aboutStory}>
          <div className={`${styles.storyBlock} ${styles.reveal}`} data-reveal>
            <h3>My Philosophy</h3>
            <p>
              I focus on building clean, scalable systems that are easy to
              maintain and delightful to use.
            </p>
          </div>

          <div className={`${styles.storyBlock} ${styles.reveal}`} data-reveal>
            <h3>What I Do</h3>
            <p>
              From frontend architecture to UI systems, I help brands transform
              ideas into real products.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
