import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import { videos } from './constants';

import styles from './projects.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

import prevIcon from '../../../../assets/prev_icon.svg'
import nextIcon from '../../../../assets/next_icon.svg'
import confirmIcon from '../../../../assets/confirm_icon.svg'
import playIcon from '../../../../assets/icons8-play-100.png'

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: number) => {
        setActiveIndex(selectedIndex);
    };

    const handlePreviewClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div id='projects'>
            <h1 className={styles.title}>PROJECTS</h1>
            <div className={styles.video_carousel}>
                <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null} nextIcon={<img loading='lazy' src={nextIcon} />} prevIcon={<img loading='lazy' src={prevIcon} />}>
                    {videos.map(video => {
                        return (
                            <Carousel.Item key={video.id}>
                                <ReactPlayer
                                    light={video.preview}
                                    playIcon={<img loading='lazy' src={playIcon} />}
                                    url={video.src}
                                    width="100%"
                                    controls={true}
                                    volume={0.2}
                                    playing={video.id === activeIndex}
                                />
                                <div className={styles.video_description__container}>
                                    <section>
                                        <h2 className={styles.video_header}>{video.title}</h2>
                                        <p className={styles.video_description}>Description</p>
                                    </section>
                                    <a className={styles.contact_us_link} href="#contacts"> Contact us <span><img loading='lazy' className={styles.confirmIcon} src={confirmIcon} alt="" /></span></a>
                                </div>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
            <div className={styles.images_container}>
                {videos.map(video => {
                    const isActive = video.id === activeIndex;
                    return (
                        <div
                            key={video.id}
                            className={isActive ? styles.highlight : styles.preview_container}
                            onClick={() => handlePreviewClick(video.id)}
                        >
                            <img
                                loading='lazy'
                                className={styles.preview}
                                width='200px'
                                height='110px'
                                src={video.preview}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
