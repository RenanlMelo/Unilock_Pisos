import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div />
        <a
          href="https://levelingcorp.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © Leveling 2024.
        </a>
      </footer>
    </>
  );
};
