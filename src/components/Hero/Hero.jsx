import { scrollToSection } from "../../utils/scrollToSection";
import { FiCode } from "react-icons/fi";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <Section id="home" className={styles.heroSection}>
      <Container className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>
            <FiCode />
            <span>Ready to innovate</span>
          </p>
          <h2>
            Building Modern Web <span>Experiences.</span>
          </h2>
          <p>
            I design and develop scalable, performant, and user-focused web
            applications using modern technologies.
          </p>

          <div className={styles.heroActions}>
            <Button
              variant="primary"
              size="md"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImage}></div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
