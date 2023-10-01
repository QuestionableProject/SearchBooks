import styles from './error.module.css'
import { useNavigate } from 'react-router-dom'

export default function Error() {
    const navigate = useNavigate()

    return (
        <div className={styles.error}>
            <b>Такой страницы нет</b>
            <p onClick={() => navigate("/")}>Вернуться назад</p>
        </div>
    )
}