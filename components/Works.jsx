import styles from "../styles/works.module.css";
// import imageHero from "../public/pants1.jpg";
import works from "../data";
import Image from "next/image";
import WorksItems from "./WorksItems";

// const URL = "http://localhost:3000/api/hello"

// console.log(works);

function Works({ filtreCategories, categories, items }) {
  // console.log(allCategories);

  return (
    <section className={styles.container} id="works">
      <header className={styles.header}>
        <div className={styles.title}>
          <h2>works</h2>
          <div className={styles.underline}></div>
        </div>
      </header>
      <main className={styles.main}>
        <header className={styles.btnContainer}>
          {categories.map((singleCategory, index) => {
            // console.log( singleCategory);
            return (
              <button
                className={styles.btn}
                onClick={() => filtreCategories(singleCategory)}
                key={index}
              >
                {singleCategory}
              </button>
            );
          })}
        </header>
        {/* <WorksItems items = {items} /> */}
        <div className={styles.secondSide}>
          {items.map((item) => {
            const { id, title, img } = item;
            // console.log(item);
            // console.log(id,title,img)
            return (
              <article className={styles.photo} key={id}>
                <div className={styles.content}>
                  <div className={styles.img}>
                    <Image
                      src={img}
                      alt={title}
                      // layout="responsive"
                      width={250}
                      height={200}
                      objectFit="cover"
                    
                    />
                  </div>
                  <h6 className={styles.underTitle}>{title}</h6>
                </div>
              </article>
            );
          })}

          {/* <article className={styles.photo}>
           
            <div className={styles.article}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                nobis repellat aliquid corrupti explicabo eius beatae.
                Laudantium, repudiandae cum molestias dignissimos, officia
                explicabo, at quam recusandae harum rerum id doloremque?
              </p>
            </div>
          </article> */}
        </div>
      </main>
    </section>
  );
}

export default Works;
