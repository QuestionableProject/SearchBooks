import styles from './page.module.css'
import Header from '../components/header/header';
import BookCard from '../components/book-card/book-card';
import { useDispatch } from 'react-redux';
import { paginationBooks } from "../store/slices/booksSlice"
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Loader from '../components/svg/loader';


export default function Page() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false)

  const stateBooks = useSelector(state => state.books.books)
  const count = useSelector(state => state.books.countItems)
  const categories = useSelector(state => state.books.categories)
  const request = useSelector(state => state.books.request)
  const sort = useSelector(state => state.books.sort)

  async function pagination() {
    setLoader(true)
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${request}${categories === "all" ? "" : `+subject:${categories}`}&orderBy=${sort}&startIndex=${stateBooks.length}&maxResults=30&key=${process.env.REACT_APP_API_KET}`);
    const data = await response.json()
    if (data.error) { 
      setLoader(false)
      return false
    }

    if (!data.items) {
      alert("We don't have such a book :(")
      setLoader(false)
      return false
    }
    
    dispatch(paginationBooks({
      ...data,
      categories: categories,
      sort: sort,
      request: request,
    }))
    setLoader(false)
  }

  return (
    <div className="App">
      <Header />

      {count !== 0 && (
        <main className={styles.main}>
          <p className={styles.search}>Found {count} results</p>
          <div className={styles.books__block}>
            {stateBooks?.map((e) =>
              <BookCard key={e.etag} data={e} />
            )}
          </div>

          {loader ? (
            <Loader />
          ) : (
            <p onClick={() => pagination()} className={styles.load}>Load more... </p>
          )}
        </main>
      )
      }
    </div >
  );
}

