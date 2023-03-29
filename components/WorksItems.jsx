

import Image from 'next/image';
import styles from '../styles/worksItems.module.css'

const WorksItems = ({items}) => {
  // console.log(items );
  return (
    <div className= {styles.container}>
        {items.map((item) => {
            const {id, title, img} = item
            // console.log(item);
            // console.log(id,title,img)
            return (
              <article className={styles.article} key={id}>
                <Image src={img} alt={title} className={styles.image} layout='fill' />
                <h6 className={styles.underTitle}>{title}</h6>
              </article>
            );
          })}
        
    </div>
  )
}

export default WorksItems