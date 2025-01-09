import styles from "./CardPage.module.css";

export default function CardPage() {
    return (
        <div className={styles.card}>
            <section className={styles.identity}>
                <h1 className={styles.name}>James Donald</h1>
                <h2 className={styles.tag}>@chaoscantrip</h2>
            </section>
        </div>
    )
}