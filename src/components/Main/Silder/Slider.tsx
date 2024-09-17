import styles from './slider.module.css'
import photo1 from '../../../assets/image_slide1.png'
import photo2 from '../../../assets/unsplash_3JquGaYrpJI.png'
import photo3 from '../../../assets/image_slide3.png'
import confirmIcon from '../../../assets/confirm_icon.svg'

const Slider = () => {
    return (
        <div className={styles.slider_container}>
            <h1 className={styles.title}>PICTURE IS A STORY</h1>
            <div className={styles.images_container}>
                <div className={styles.image_container}>
                    <img loading='lazy' className={styles.image} src={photo1} alt="" />
                    <div className={styles.image_description__container}>
                        <section>
                            <h2 className={styles.image_header}>Toyota</h2>
                            <p className={styles.image_description}>Description</p>
                        </section>
                        <a className={styles.view_project_link} href="">
                            View Project
                            <span><img
                                loading='lazy'
                                className={styles.confirmIcon}
                                src={confirmIcon} alt="" />
                            </span></a>
                    </div>
                </div>
                <div className={styles.image_container}>
                    <img loading='lazy' className={styles.image} src={photo2} alt="" />
                    <div className={styles.image_description__container}>
                        <section>
                            <h2 className={styles.image_header}>Home /2024</h2>
                            <p className={styles.image_description}>Description</p>
                        </section>
                        <a className={styles.view_project_link} href="">
                            View Project
                            <span><img
                                loading='lazy'
                                className={styles.confirmIcon}
                                src={confirmIcon} alt="" />
                            </span>
                        </a>
                    </div>
                </div>
                <div className={styles.image_container}>
                    <img loading='lazy' className={styles.image} src={photo3} alt="" />
                    <div className={styles.image_description__container}>
                        <section>
                            <h2 className={styles.image_header}>Jeremy Vibes</h2>
                            <p className={styles.image_description}>Description</p>
                        </section>
                        <a className={styles.view_project_link} href="">
                            View Project
                            <span><img
                                loading='lazy'
                                className={styles.confirmIcon}
                                src={confirmIcon} alt="" />
                            </span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;