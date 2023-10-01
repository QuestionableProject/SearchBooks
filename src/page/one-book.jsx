import { useEffect, useState } from "react";
import Header from "../components/header/header";
import { useParams } from "react-router-dom";
import styles from './one-book.module.css'
import noPhoto from "../assets/placeholder.png"

export default function OneBook() {
    const { bookId } = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        async function searchBook() {
            if (bookId === "") return false
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.REACT_APP_API_KET}`);
            const data = await response.json()
            if (data.error) {
                alert("There is no such book or an error has occurred");
                return false
            }
            setBook(data)
        }
        searchBook()
    }, [bookId])

    return (
        <div>
            <Header />

            <main className={styles.main}>
                {book && (
                    <section>
                        <div className={styles.block__image}>
                            <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : noPhoto} alt={book.volumeInfo.title} />
                        </div>
                        <div className={styles.book__info}>
                            {book.volumeInfo.categories && (
                                <ul>
                                    {book.volumeInfo.categories.map((e, i) =>
                                        <li key={i} >{e}</li>
                                    )}
                                </ul>
                            )}

                            <b>{book.volumeInfo.title}</b>
                            {book.volumeInfo.authors && (
                                <ul>
                                    {book.volumeInfo.authors.map((e, i) =>
                                        <li key={i}>{e}</li>
                                    )}
                                </ul>
                            )}

                            <div className={styles.description}>
                                {book.volumeInfo.description && (
                                    <p>{book.volumeInfo.description}</p>
                                )}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    )
}