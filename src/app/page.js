import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./CardPage.module.css";

export default function CardPage() {
    return (
        <div className={styles.card}>
            <section className={styles.identity}>
                <h1 className={styles.name}>James Donald</h1>
                <h2 className={styles.tag}>@chaoscantrip</h2>
            </section>
            <section className={styles.links}>
                <LinkBar text="GitHub" styleName={styles.github} icon={faGithub} href="https://github.com/ChaosCantrip" />
            </section>
        </div>
    )
}

function LinkBar({ text, styleName, icon, href }){
    return (
        <a href={href} className={`${styles.link_bar} ${styleName}`}>
            <FontAwesomeIcon icon={icon} className={styles.link_bar_icon}/>
            <p className={styles.link_bar_text}>{text}</p>
        </a>
    )
}