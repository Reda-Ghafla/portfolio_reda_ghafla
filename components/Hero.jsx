import styles from "../styles/hero.module.css";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import Image from 'next/image'
import x from "../images/shirt1.jpg";
import Image from "next/image";

const Hero = () => {

  // console.log(x);
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div className={styles.underContainer}>
          <div className={styles.firstHello}>
            <h2>
              <span>Hello,</span>I am Reda.
            </h2>
          </div>
          <div className={styles.job}>
            <h5>Junior Front End</h5>
          </div>
          <p className={styles.desc}>
            Must explain to how all this mistaken idea denouncing pleasure pain
            the system and expound the actua.
          </p>
          <div className={styles.btn}>
            <button className="btn">
              hire me
              <span>&#8594;</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.clipPath}>
          <div className={styles.imgContainer}>
            {/* <Image
              src={x}
              alt="Picture of the author"
              layout="responsive"
              // width={700}
              // height={700}
              objectFit = 'cover'
            /> */}
            {/* <img src={x} alt="" />
            <Image src={x}
              alt="Picture of the author"
              layout="responsive"
              // width={500}
              // height={500}
              objectFit="contain"
               /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
