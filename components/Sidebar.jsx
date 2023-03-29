
import styles from '../styles/sidebar.module.css'
import Menu from './Menu'

// openNavbar = {openNavbar} setOpenNavbar = {setOpenNavbar}  

const Sidebar = ({openNavbar, setOpenNavbar }) => {
  return (
    <aside className={`${styles.container} ${(openNavbar && styles.active)}`}>
        <Menu  setOpenNavbar = {setOpenNavbar}/>
    </aside>
  )
}

export default Sidebar