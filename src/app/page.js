import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./CardPage.module.css";
import {faEnvelope, faGlobe} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import PortraitImage from "@public/Portrait.jpg";

export const metadata = {
    title: "ChaosCantrip"
}

export default function CardPage() {
    return (
        <div className={styles.card}>
            <section className={styles.identity}>
                <div className={styles.portrait_disc}>
                    <Image src={PortraitImage} alt={""} className={styles.portrait}/>
                </div>
                <h1 className={styles.name}>James Donald</h1>
                <h2 className={styles.tag}>@chaoscantrip</h2>
            </section>
            <section className={styles.links}>
                <LinkBar text="Portfolio" styleName={styles.website} icon={faGlobe} href="https://portfolio.chaoscantrip.com" />
                <LinkBar text="GitHub" styleName={styles.github} icon={faGithub} href="https://github.com/ChaosCantrip" />
                <LinkBar text="X (Twitter)" styleName={styles.twitter} icon={faXTwitter} href="https://twitter.com/chaoscantrip" />
                <LinkBar text="LinkedIn" styleName={styles.linkedin} icon={faLinkedin} href="https://www.linkedin.com/in/chaoscantrip/" />
                <LinkBar text="dev@chaoscantrip.com" styleName={styles.email} icon={faEnvelope} href="mailto:dev@chaoscantrip.com" />
            </section>
        </div>
    )
}

function LinkBar({ text, styleName, icon, href }){
    return (
        <a href={href} className={`${styles.link_bar} ${styleName}`} target="_blank">
            <FontAwesomeIcon icon={icon} className={styles.link_bar_icon}/>
            <p className={styles.link_bar_text}>{text}</p>
        </a>
    )
}