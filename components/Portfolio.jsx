import styles from '../styles/portfolio.module.css';
import Image from 'next/image';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  DiCss3Full,
  DiJavascript1,
  DiReact,
  DiSass,
  DiNodejs,
} from 'react-icons/di';
// import Nextjs from '../images/skills/next-js.svg';
import { TbBrandNextjs, TbFileX } from 'react-icons/tb';
import { FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const style = {
  height: '100px',
  width: '100px',
};

const skills = [
  {
    img: <AiFillHtml5 style={style} />,
    title: 'HTML5',
  },
  {
    img: <DiCss3Full style={style} />,
    title: 'CSS3',
  },
  {
    img: <DiJavascript1 style={style} />,
    title: 'JavaScript',
  },
  {
    img: <DiReact style={style} />,
    title: 'Reactjs',
  },
  {
    img: <TbBrandNextjs style={style} />,
    title: 'Nextjs',
  },
  {
    img: <FaGitAlt style={style} />,
    title: 'Git',
  },
  {
    img: <SiTailwindcss style={style} />,
    title: 'TailwindCss',
  },
  {
    img: <DiSass style={style} />,
    title: 'Sass',
  },
  {
    img: <DiNodejs style={style} />,
    title: 'Nodejs',
  },
];
function Portfolio() {
  return (
    <div className={styles.container} id="portfolio">
      <header className={styles.header}>
        <div className={styles.title}>
          <h2>Portfolio</h2>
          <div className={styles.underline}></div>
        </div>
      </header>

      <div className={styles.listSkills}>
        {skills.map((skill, index) => {
          const { img, title } = skill;
          return (
            <div className={styles.singleSkill} key={index}>
              <div className={styles.imgContainer}>
                <button className={styles.btnSkills}>{img}</button>
              </div>
              <h2 className={styles.title}>{title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
