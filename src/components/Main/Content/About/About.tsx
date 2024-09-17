import Cards from "./Card/Card";
import { cards } from "./constants";

import styles from './about.module.css'

const About = () => {
    return (
        <div className={styles._about} id="about">
            <div className={styles.cards}>
                {cards.map(item => {
                    return <Cards key={item.id} item={item} />
                })}
            </div>
            <div className={styles.about_container}>
                <div className={styles.about}>
                    <section>
                        <h1>Who we are?</h1>
                    </section>
                    <section>
                        <p>Dreamnalot Studios, Based in Darwin, comprises a team of passionate videographers/ photographers and VFX artists dedicated to excellence across diverse media platforms. At the core of our enthusiasm lies a profound appreciation for the creative dimension of our craft. Our portfolio stands as a testament to our mastery, highlighting our expertise in:</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;