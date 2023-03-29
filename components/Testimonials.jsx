import Image from 'next/image';
import { useState } from 'react';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '../styles/testimonials.module.css';

const Testimonials = ({ resultT }) => {
  // console.log(resultT[0]);
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = resultT[index];

  const checkNumber = (number) => {
    if (number > resultT.length - 1) {
      return 0;
    }
    if (number < 0) {
      return resultT.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <section className={styles.container} id="testimonials">
      <header className={styles.header}>
        <div className={styles.title}>
          <h2>Testimonials</h2>
          <div className={styles.underline}></div>
        </div>
      </header>

      <article key={id} className={styles.testimonials}>
        <div>
          <div className={styles.imgContainer}>
            <Image
              src={image}
              alt={name}
              fill="responsive"
              width={150}
              height={150}
              className={styles.personImg}
            />
            <span className={styles.quoteIcon}>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className={styles.author}>{name}</h4>
          <p className={styles.job}>{job}</p>
          <p className={styles.info}>{text}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.prevBtn}>
              <FaChevronLeft onClick={prevPerson} />
            </button>
            <button className={styles.nextBtn}>
              <FaChevronRight onClick={nextPerson} />
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
