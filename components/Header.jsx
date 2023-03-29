import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import styles from "../styles/header.module.css";

function Header({ openNavbar, setOpenNavbar }) {
  //  const [openNavbar, setOpenNavbar] = useState(false)
  // console.log(props);
  return (
    <header className={`${styles.container} ${openNavbar && styles.active}`}>
      <div className={styles.logo} onClick={() => setOpenNavbar(false)}>
        <div className={styles.logoContainer}>
          <span className={`${styles.span} ${openNavbar && styles.activeSpan}`}>
            L
          </span>
          <span
            className={`${styles.span} ${openNavbar && styles.activeSpan2}`}
          >
            ogo
          </span>
        </div>
      </div>
      <nav className={styles.navbar} onClick={() => setOpenNavbar(false)}>
        <div className={styles.list___navbar}>
          <span className={styles.item__span}>
            {" "}
            <span>
              <AiOutlineMail />
            </span>
            redaghafla@gmail.com
          </span>
          <span className={styles.item__span}>
            {" "}
            <span>
              <AiFillPhone />
            </span>
            +212601645404
          </span>
        </div>
      </nav>
      <div
        className={styles.hamburger}
        onClick={() => setOpenNavbar(!openNavbar)}
      >
        <span className={`${styles.icon} ${openNavbar && styles.active2}`}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </span>
      </div>
    </header>
  );
}

export default Header;
