import styles from "./Home.module.scss";
import clsx from "clsx";
const Home = () => {
  return (
    <div className={clsx(styles["home-container"], "p-5")}>
      <div className="s-font text-white h3 mb-0">STEPHEN</div>
      <div className={clsx(styles["footer-container"], "p-5")}>
        <div
          className="text-center text-white c-font h4 mb-0"
          style={{ letterSpacing: "12px" }}
        >
          ELEPHANT
        </div>
      </div>
    </div>
  );
};

export default Home;
