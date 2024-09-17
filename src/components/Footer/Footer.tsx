import Info from './Info/Info';
import SignUp from './SignUp/SignUp';

import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer}>
                <SignUp />
                <Info />
            </div>
        </footer>
    );
};

export default Footer;