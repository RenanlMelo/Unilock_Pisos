import styles from "./inicio.module.scss";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <>
      <div className={styles.inicio_div}>
        <img
          src="/image_inicio_bg.jpeg"
          alt="background image"
          width={1920}
          height={1440}
          className={styles.inicio_background_image}
          loading="eager"
        />
        <img
          src="/image_inicio_bgMobile.jpeg"
          alt="background image"
          width={516}
          height={1032}
          className={styles.inicio_backgroundMobile_image}
          loading="eager"
        />
        <span className={styles.inicio_filter} />
        <div className={styles.inicio_shadow} />
        <div className={styles.inicio_shadow} />
        <section className={styles.inicio_section}>
          <div>
            <h1 className={styles.inicio_title}>Unilock Pisos</h1>
            <h2 className={styles.inicio_subtitle}>Intertravados</h2>
          </div>
          <div className={styles.inicio_buttons_div}>
            <Link to="/servicos" className={styles.inicio_button1}>
              Serviços
            </Link>
            <Link to="/sobre" className={styles.inicio_button2}>
              Sobre nós
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
