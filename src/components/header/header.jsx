import { useState } from 'react';
import SearchIcon from '../svg/search-icon'
import styles from './header.module.css'
import { useDispatch } from 'react-redux';
import { addBooks } from "../../store/slices/booksSlice"
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [searchInput, setSearchInput] = useState("");
    const [selectCategories, setSelectCategories] = useState("all");
    const [selectSort, setSelectSort] = useState("relevance");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function searchBooks() {
        if (searchInput === "") return false
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}${selectCategories === "all"?"":`+subject:${selectCategories}`}&orderBy=${selectSort}&key=${process.env.REACT_APP_API_KET}+&maxResults=30`);
        const data = await response.json()
        if (data.error) return false

        if (!data.items) {
            alert("We don't have such a book :(")
            return false
        }
        
        dispatch(addBooks({
            ...data,
            categories: selectCategories,
            sort: selectSort,
            request: searchInput,
        }))
        navigate("/")
    }

    async function inputEnter(e) {
        if (e.key === 'Enter') {
            searchBooks();
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.blur}>
                <h1>
                    Search for Books
                </h1>
                <label className={styles.input__search}>
                    <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} onKeyDown={(e) => inputEnter(e)} />
                    <SearchIcon onToggle={searchBooks} w={30} h={30} />
                </label>
                <div className={styles.filter}>
                    <label>
                        <p>
                            Categories
                        </p>
                        <select value={selectCategories} onChange={e => setSelectCategories(e.target.value)}>
                            <option>all</option>
                            <option>art</option>
                            <option>biography</option>
                            <option>computers</option>
                            <option>history</option>
                            <option>medical</option>
                            <option>poetry</option>
                        </select>
                    </label>

                    <label>
                        <p>
                            Sorting by
                        </p>
                        <select value={selectSort} onChange={e => setSelectSort(e.target.value)}>
                            <option>relevance</option>
                            <option>newest</option>
                        </select>
                    </label>
                </div>
            </div>
        </header>
    )
}