import logo from '../../assets/Letters_edited 1.svg'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img loading='lazy' src={logo} alt="" className={styles.logo} />
            <div className={styles.navigation}>
                <ul className={styles.buttons_list}>
                    <li><a className={styles.header_link} href="#about">About</a></li>
                    <li><a className={styles.header_link} href="#projects">Projects</a></li>
                    <li><a className={styles.header_link} href="#team">Team</a></li>
                    <li><a className={styles.header_link} href="#contacts">Contacts</a></li>
                </ul>
            </div>
            <div className={styles._logo}>logo</div>
        </header>
    );
};

export default Header;