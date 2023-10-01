import styles from './loader.module.css'

export default function Loader() {
    return (
        <svg width={50} height={50} className={styles.loader}>
            <rect fill="black" x="10" y="10" width="50" height="50"/>
        </svg>
    )
}