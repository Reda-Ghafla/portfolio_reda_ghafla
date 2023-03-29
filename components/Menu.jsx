import Link from "next/link";
import styles from "../styles/menu.module.css";


const Menu = ({setOpenNavbar}) => {
  const menus = [
    {
      id: "home",
      title: "home",
    },
    {
      id: "works",
      title: "works",
    },
    {
      id: "portfolio",
      title: "portfolio",
    },

    {
      id: "testimonials",
      title: "testimonials",
    },
    {
      id: "contact",
      title: "contact",
    },
  ];
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
       {
        menus.map(item=>{
      
          return (
            <li key={item.id} >
            <Link href={`#${item.id}`}>
              <a onClick={()=>setOpenNavbar(false)} className= {styles.link}> {item.title} </a>
            </Link>
          </li>
          )
        })
       }
      </ul>
    </nav>
  );
};

export default Menu;
