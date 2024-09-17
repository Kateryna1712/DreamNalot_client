import styles from './info.module.css'

const Info = () => {
    return (
        <div className={styles.links_container}>
            <ul className={styles.links}>
                <li><a className={styles.link} href="">About</a></li>
                <li><a className={styles.link} href="">Projects</a></li>
                <li><a className={styles.link} href="">Team</a></li>
                <li><a className={styles.link} href="">Contact</a></li>
            </ul>
            <ul className={styles.links}>
                <li><a className={styles.link} href="">Team and conditions</a></li>
                <li><a className={styles.link} href="">Do not sell my personal information</a></li>
                <li><a className={styles.link} href="">Teams of Service</a></li>
                <li><a className={styles.link} href="">Prestige</a></li>
                <li><a className={styles.link} href="">Privacy Policy</a></li>
            </ul>
            <ul className={styles.links}>
                <li><a className={styles.link} href="">Instagram</a></li>
                <li><a className={styles.link} href="">Twitter</a></li>
                <li><a className={styles.link} href="">Facebook</a></li>
            </ul>
        </div>
    );
};

export default Info;