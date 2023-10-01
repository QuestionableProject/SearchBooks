import styles from './book-card.module.css'
import noPhoto from "../../assets/placeholder.png"

import { useNavigate } from 'react-router-dom'

export default function BookCard({ data }) {
    const navigate = useNavigate();

    return (
        <div onClick={() =>  navigate(`/book/${data.id}`)} className={styles.book__card}>
            <img src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : noPhoto} alt="book" />
            <div>
                <p className={styles.categorie}>{data.volumeInfo.categories?data.volumeInfo.categories[0]:null}</p>
                <b>{data.volumeInfo.title}</b>
                <p className={styles.authors}>{data.volumeInfo.authors?data.volumeInfo.authors:null}</p>
            </div>
        </div>
    )
}