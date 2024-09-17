import image1 from '../../../../assets/Frame 63.png'
import image2 from '../../../../assets/Frame 62.png'
import image3 from '../../../../assets/Frame 65.png'
import image4 from '../../../../assets/Frame 66.png'
import image5 from '../../../../assets/Frame 67.png'

import styles from './recentWorks.module.css'

const RecentWorks = () => {
    return (
        <div>
            <h1 className={styles.title}>RECENT WORKS</h1>
            <div className={styles.images}>
                <img loading='lazy' src={image1} alt="" />
                <img loading='lazy' src={image3} alt="" />
                <img loading='lazy' src={image2} alt="" />
                <img loading='lazy' src={image4} alt="" />
                <img loading='lazy' src={image5} alt="" />
            </div>
        </div>
    );
};

export default RecentWorks;