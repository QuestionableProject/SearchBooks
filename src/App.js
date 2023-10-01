import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Page from "./page/page";
import Error from "./page/error";
import OneBook from "./page/one-book";


export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Page/>,
            errorElement: <Error/>,
        },
        {
            path: "/book/:bookId",
            element: <OneBook/> ,
        }
    ]);
    return (
        <RouterProvider router={router} />
    )
}

export default App